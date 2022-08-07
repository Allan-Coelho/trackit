import axios from "axios";

const ENDPOINT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(body) {
  const promise = axios.post(`${ENDPOINT + "/auth/sign-up"}`, body);
  return promise;
}

export { postSignUp };
