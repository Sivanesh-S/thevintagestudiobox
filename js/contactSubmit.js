const db = firebase.database();

const getFormData = form => {
  const formFields = ['subject', 'message', 'name', 'email', 'phone']
  const formData = {};

  formFields.forEach(field => {
    formData[field] = form[field].value
  })
  return formData
}

const onSubmit = event => {
  event.preventDefault()
  const formData = getFormData(event.originalTarget)
  db.ref('contacts').push(formData).then(() => {
    alert('Form Submitted successfully')
  }).catch(err => {
    console.error(err)
    alert('Form Submission failed. Please try later after some time. Contact Phone numbers instead')
  })
}