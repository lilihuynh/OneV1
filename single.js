app.post('/image-upload-single', (req, res) => {
    const path = Object.values(Object.values(req.files)[0])[0].path
    cloudinary.uploader.upload(path)
        .then(image => res.json([image]))
})