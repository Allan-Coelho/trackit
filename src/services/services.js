import axios from "axios";

const ENDPOINT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(body) {
  const promise = axios.post(`${ENDPOINT + "/auth/sign-up"}`, body);
  return promise;
}

function getHabits(config) {
  const promise = axios.get(`${ENDPOINT + "/habits"}`, config);
  return promise;
}

function deleteHabit(habitID, config) {
  const promise = axios.delete(`${ENDPOINT + "/habits/" + habitID}`, config);
  return promise;
}

function getTodayHabits(config) {
  const promise = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    config
  );
  return promise;
}

function postMarkHabit(config, habitID) {
  const promise = axios.post(
    `${ENDPOINT + "/habits/" + habitID + "/check"}`,
    config
  );
  return promise;
}

export { postSignUp, getHabits, deleteHabit, getTodayHabits };
