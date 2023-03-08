export const testForm = (results, totalInputs) => {

  // console.log(results)

  if (Object.keys(results).length === totalInputs) {

    for (const key in results) {
      if(!results[key]){
        return false
      }
    }

    return true

  } else {
    return false
  }

}