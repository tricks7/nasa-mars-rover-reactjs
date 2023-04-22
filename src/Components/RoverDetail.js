import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DatePicker from './DatePicker'

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-12-3&api_key=DEMO_KEY'

const RoverDetail = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        //<DatePicker></DatePicker>
        <div>{data.photos.img_src}</div>

        //DEFAULT TO DISPLAY CURRENT DAY'S PHOTOS
        //CHOOSE FROM DATEPICKER, DISPLAY PHOTOS FROM CHOSEN DAY
    )
}

export default RoverDetail