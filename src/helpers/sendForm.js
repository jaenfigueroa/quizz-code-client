import { global } from "./global"

export const sendForm = async (body, route) => {
  // console.log({
  //   body: body,
  //   url: `${global.urlServer}${route}`
  // })

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  
  try {
    const response = await fetch(`${global.urlServer}${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    
    const data = await response.json()
    // console.log(data)
    
    return data

  } catch (error) {

    // console.log('no se puedo realizar la peticion')

    return {
      status: 'error',
      message: 'No se pudo enviar la solicitud'
    }
  }
}
