export const updateUser = (user) => {
  // guardar el usuario del local storage
  window.localStorage.setItem('user', JSON.stringify(user))
}
