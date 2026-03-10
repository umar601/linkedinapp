// const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudConnection');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'linkenidapp',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
}); 

const upload = multer({ storage: storage });

module.exports = upload;