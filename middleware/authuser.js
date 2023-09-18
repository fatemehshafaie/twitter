import axios from 'axios';
import Swal from 'sweetalert2';

export default defineNuxtRouteMiddleware((to, from) => {
console.log(useCookie("user").value);
    axios.get("http://192.168.203.83:4000/users/is_login", {
        headers: {
            "Cache-Control": "no-cache",
            "cookies": useCookie("user").value,
        },
    })
        .then(async function (response) {
            if (!response.data.status) {
                await Swal.fire({
                    icon: 'warning',
                    text: response.data.message
                })

                return navigateTo('../login')
            }
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                text: error
            })
        })

});