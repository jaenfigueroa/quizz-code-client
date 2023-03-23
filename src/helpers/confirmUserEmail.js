import { global } from "./global";

const confirmUserEmail = async (confirmationToken) => {
  try {
    const response = await fetch(
      `${global.urlServer}/users/confirm-registration/${confirmationToken}`
    );
    const confirmedUser = await response.json();
    return confirmedUser;
  } catch (error) {
    return {
      status: "error",
      message: "No se pudo enviar la solicitud",
    };
  }
};

export default confirmUserEmail;
