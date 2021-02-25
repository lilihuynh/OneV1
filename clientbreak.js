// Inside onChange handler
// ....

// #1 There are too many files!
if (files.length > 3) {
    const msg = 'Only 3 images can be uploaded at a time'
    return this.toast(msg, 'custom', 2000, toastColor)  
  }
  
  const types = ['image/png', 'image/jpeg', 'image/gif']
  
  files.forEach((file, i) => {
    
    // #2 Catching wrong file types on the client
    if (types.every(type => file.type !== type)) {
      errs.push(`'${file.type}' is not a supported format`)
    }
    
    // #3 Catching files that are too large on the client
    if (file.size > 150000) {
      errs.push(`'${file.name}' is too large, please pick a smaller file`)
    }
  
    formData.append(i, file)
  })
  
  if (errs.length) {
    return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor))
  }
  
  // ....
  // End inside onChange handler
  
  // Inside fetch request
  // ...
  
  // #4 Catching files that created a Cloudinary error
  .then(res => {
    if (!res.ok) {
      throw res
    }
    return res.json()
  })
  
  // ...
  
  .catch(err => {
    err.json().then(e => {
      this.toast(e.message, 'custom', 2000, toastColor)
      this.setState({ uploading: false })
    })
  })
  
  // ...
  // End inside fetch request
  
  // Inside Images.js render function
  // ...
  
  // #5 Catching images that could not load on the DOM
  <img 
    src={image.secure_url} 
    alt='' 
    onError={() => props.onError(image.public_id)}
  />
  
  // ...
  // End inside Images.js render function