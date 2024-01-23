// // Handle Request & Response
// import {Request, Response, NextFunction} from 'express';
// import prisma from '../connection';
// import fs from 'fs';



// export const createEvent = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
//     let createdEvent;
    
//     try {  
//             await prisma.$transaction(async(tx) => {
//                 const {name, description, date, location, price, availableSeats, categoryId} = JSON.parse(req.body.data11)// kalo mau masukin data ke form data kita pake keynya namanya data11
//                 const organizerId = (req as any ).payload // dari token verify
//                 console.log ('>>>>>>>')
//                 console.log(organizerId)
//                 const {id} = await tx.events.create({
//                     data: {
//                         name, description, date:new Date(date), location, price, availableSeats, 
//                         organizerId: organizerId.id
//                     }
//                 })

//                 await tx.categoryOnEvents.create({
//                     data: {
//                         eventId:id,
//                         categoryId
//                     }
//                 })


//                 const createImages: any =[]


//                 //masukin gambar key dari formdata namanya = 'imageUpload'
//                 if(req.files){
//                     let filesArray= Array.isArray(req.files) ? req.files : req.files['imageUpload']
//                     console.log(filesArray)
//                    filesArray.forEach(async(item: any) => {
//                         createImages.push({url: item.filename, events_id: id})
//                     })
//                 }

                
                
//                 await tx.eventImages.createMany({
//                     data: createImages
//                 })
//             })

//             res.status(201).send({
//                 error: false, 
//                 message: 'Create Event Success!',
//                 data: null
//             })
//         } catch (error) {
//             if(req.files){
//                 let filesArray=Array.isArray(req.files) ? req.files : req.files['imageUpload']
//                 filesArray.forEach(async(item: any) => {
//                      fs.rmSync(item.path)
//                  })
//             }    
//             console.log(error)
//         } finally {
//             prisma.$disconnect()
//         }
// }

// export const deleteEvent = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//         // 1. Get Id Product from Req
//         const {eventId} = req.params
//         console.log(eventId)

//         let imagesToDelete: any
//         await prisma.$transaction(async(tx) => {
//             // 2.1. Before Delete Images, Get Image Url to Delete Image File from Public
//             imagesToDelete = await tx.eventImages.findMany({
//                 where: {
//                     eventId: {
//                         contains: eventId
//                     }
//                 }
//             })
//             // 2.2. Delete Product_Images
//             await tx.eventImages.deleteMany({
//                 where: {
//                     eventId: eventId
//                 }
//             })

//             // 3. Delete Products
//             await tx.events.delete({
//                 where: {
//                     id: eventId
//                 }
//             })
//         })

//         // 4. Delete Images from public/images
//         imagesToDelete.forEach((item: any) => {
//             fs.rmSync(`public/image/${item.url}`)
//         })

//         res.status(200).send({
//             error: false, 
//             message: 'Delete Product Success!', 
//             data: null
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const findEvents = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//         const products = await prisma.events.findMany({
//             include: {
//                 eventImages: true
//             }
//         })

//         res.status(200).send({
//             error: false, 
//             message: 'Get Product Success!', 
//             data: products
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }