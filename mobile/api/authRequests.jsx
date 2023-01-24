import axios from "axios";

const authURL = "http://10.0.2.2:4000/user";

export const handleCreateUser = async (username, password) => {
  await axios.post(
    `${authURL}/register`,
    {
      username,
      password,
    },
    { headers: { "Content-Type": "Application/json" } }
  );
};

export const handleLoginUser = async (username, password) => {
  const response = await axios.post(
    `${authURL}/login`,
    {
      username,
      password,
    },
    { headers: { "Content-Type": "Application/json" } }
  );
  return response?.data;
};
