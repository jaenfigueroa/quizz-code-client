export const uploadImage = async (event) => {
  event.preventDefault()

  const formData = new FormData()
  formData.append('image', event.target.files[0])

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    console.log(data)

  } catch (error) {
    console.log(error)
  }
}
