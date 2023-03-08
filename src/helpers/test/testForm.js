export const testForm = (results, totalInputs) => {

  // console.log(results)

  //verificar la cantidad de valores coincide con el total de inputs que se esperan

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