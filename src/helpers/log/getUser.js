export const getUser = () => {
  //traer el usuario del local storage
  const user = JSON.parse(localStorage.getItem('user'))

  return user
}
