import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-12-3&api_key=DEMO_KEY'

const Opportunity = () => {
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
        <div>{data.photos}</div>
    )
}

export default Opportunity