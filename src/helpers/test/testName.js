const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/

///////////////////////////////////////////////////////
export const testName = (name) => {
  
  if (regex.test(name)) {
    return {
      result: true,
      message: 'El nombre y apellido son válidos'
    }
  } else{
    return {
      result: false,
      message: 'El nombre y/o apellido no son válidos'
    }
  }

}
