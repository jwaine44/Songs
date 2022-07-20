import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

// 1. Need to get the id from params (useParams)
// 2. Need to display information on load so need useEffect
// 3. For the information: need useState
// 4. Need axios to grab info from backend

const Details = () => {
    const [song, setSong] = useState()
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
            .then(res => setSong(res.data))
            .catch(err => console.log(err))
    }, [])

    const redirectToMain = () => {
        navigate('/')
    }

  return (
    <fieldset>
        <legend>Details.jsx</legend>
        {
            song?
            <div>
                <h5>Title: {song.title}</h5>
                <h5>Artist: {song.artist}</h5>
                <h5>Rating: {song.rating}</h5>
                <DeleteButton deleteId = {id} onDelete = {redirectToMain} />
            </div>:
            <h5>The song is not available</h5>
        }
    </fieldset>
  )
}

export default Details