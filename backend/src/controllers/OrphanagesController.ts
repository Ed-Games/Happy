import {Request, Response} from 'express'
import Orphanage from '../models/Orphanages'
import {getRepository} from 'typeorm'
import orphanageView from '../views/Orphanages'
import * as Yup from 'yup'


export default {
    async index(request:Request, response:Response){
        const orphanagesRepository = getRepository(Orphanage)

        const orphanages = await orphanagesRepository.find( {
            relations: ['images']
        })

        return response.json(orphanageView.renderMany(orphanages))


    },

    async show(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage)
        const {id} = request.params

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return response.json(orphanageView.render(orphanage))
    },

    async create(request: Request,response: Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            whatsapp,
            email
        } = request.body
    
        const orphanagesRepository = getRepository(Orphanage)

        const requestImages = request.files as Express.Multer.File[]

        const images = requestImages.map(image => {
            return { path: image.filename}
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends ==='true',
            images,
            whatsapp,
            email
        }

        const scheme = Yup.object().shape({
            name: Yup.string().required(),

            latitude: Yup.number().required(),

            longitude: Yup.number().required(),

            about: Yup.string().required().max(300),

            instructions: Yup.string().required(),

            opening_hours: Yup.string().required(),

            open_on_weekends: Yup.boolean().required(),

            whatsapp: Yup.string().required(),

            email: Yup.string().required(),
            
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))

        })

        await scheme.validate(data,{
            abortEarly: false
        })
        
        const orphanage = orphanagesRepository.create(data)
    
        await orphanagesRepository.save(orphanage)
        return response.status(201).json({message: "created orphanage"})
    }
}