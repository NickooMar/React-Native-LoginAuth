import axios from "axios";

const authURL = "http://10.0.2.2:4000/user";

export const handleCreateUser = async (username, password) => {
  await axios
    .post(`${authURL}/register`, {
      username,
      password,
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
