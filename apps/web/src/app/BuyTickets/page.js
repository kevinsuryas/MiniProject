'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Page () {

    const [data, setData] = useState({})
    const [tabOpen, setTabOpen] = useState(null)

    const fetchData = async() => {
        try {
            const res = await axios.get('http://localhost:5000/events/1')
            
            setData(res.data)
            setTabOpen(res.data.description)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeTabOpen = (e) => {
        setTabOpen(data[e.target.getAttribute('name')])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
        <div className="mt-[8rem] flex items-center justify-center">
            <img src='https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231218085851.png'/>
        <div className="flex justify-center items-center mt-[2rem] ">
            <div className="text-center ml-[10rem]">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Polarisasi Tontonanmu, Suaramu</h2>
                            <p>Wednesday, 20 January 2023</p>
                            <p>IDR 30.000</p>
                            <p>Jakarta</p>
                        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Buy Ticket</button>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


        <div>
            {console.log(data)}
            <div className="flex justify-center gap-10 py-10">
                <div name='description' onClick={(e) => onChangeTabOpen(e)} className="bg-blue-300 px-3 rounded-md">
                    Description 
                </div>
                <div name='tickets' onClick={(e) => onChangeTabOpen(e)} className="bg-blue-500 px-3 rounded-md">
                    Tickets 
                </div>
            </div>
            <div>
                {
                  typeof tabOpen === 'string'?
                        tabOpen
                    :
                        typeof tabOpen === 'object'?
                            tabOpen?.map((item) => {
                                return(
                                    <div>
                                        {item.category}
                                    </div>
                                )
                            })
                        :
                            null
                }
            </div>
        </div>
        </>
    )
}