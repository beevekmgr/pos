import multer from 'multer';

//Setting for image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log(file)
        cb(null, './api/v-0.0.0/uploads');
    },
    filename : function (req, file, cb) {
        cb(null, file.originalname );
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true) //Save the file
    }
    else{
        cb(new Error('Mimetype not recognized'),false) //Dont save the file
    }
}

var upload = multer({
    storage: storage,
    limits: {
        fileSize : 1024 * 1024 * 6
    },
    fileFilter : fileFilter
});

export default upload;