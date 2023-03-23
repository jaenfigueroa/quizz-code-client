export const sortList = (list) => {
  return list.sort((a, b) => {
    return b.points - a.points
  })
}
