import multer from 'multer'
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname,'..','..','uploads'), // CORRIGE AI
        filename: (request,file,callback) => {
            const filename = `${Date.now()}-${file.originalname}`
            callback(null,filename)
        }

    })
}

