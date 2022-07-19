import React, {useState, useEffect} from 'react'
import axios from 'axios'

// 1. need to grab info from a different URL using Axios
// 2. Display the information on load useEffect
// 3. need useState for the info that changes

const TestPage = () => {
    const [info, setInfo] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/test`)
            .then(res =>{
                console.log(res.data)
                setInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>TestPage.jsx</legend>
            {
                info?
                <h1>{info.status}</h1>:
                <h1>Loading...</h1>
            }
        </fieldset>
    )
}

export default TestPage