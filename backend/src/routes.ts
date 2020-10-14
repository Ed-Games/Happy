import express from 'express'
import OrphanagesController from './controllers/OrphanagesController'
import multer from 'multer'
import uploadConfig from './config/multerConfig'

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/orphanages',OrphanagesController.index)
routes.get('/orphanages/:id',OrphanagesController.show)
routes.post('/orphanages',upload.array('images'),OrphanagesController.create)

export default routes