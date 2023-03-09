export const updateUser = (user) => {
  //guardar el usuario del local storage
  localStorage.setItem("user", JSON.stringify(user));
}