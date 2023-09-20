import axios from 'axios';
import { defineStore } from 'pinia';
export const useProfile = defineStore('userss', () => {
  let userX = ref({})
axios
  .get("http://172.20.10.2:4000/users/usrinfo", {
    headers: {
      "Cache-Control": "no-cache",
      "cookies": useCookie("user").value,
    },
  })
  .then(function (response) {
    // console.log(1);
    userX.value=response.data.body
    console.log(userX.value);
    // handle success
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  return { userX }
})
