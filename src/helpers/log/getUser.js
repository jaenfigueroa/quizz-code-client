export const getUser = () => {
  // traer el usuario del local storage
  const user = JSON.parse(window.localStorage.getItem('user'))
  // console.log(user)

  return user
}
