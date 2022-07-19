import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

// 1. for each input we need useState
// 2. need axios for the backend create function
// 3. to redirect to another page we need useNavigate

const CreateFormUpdate = (props) => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(5)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // need to post the new song to the backend via axios
        // two arguments: the route URL and what info is set as an object
        axios.post(`http://localhost:8000/api/songs`, {title, artist, rating})
            .then(res => props.updateList(res.data))
            .catch(err => console.log(err))
    }

  return (
    <fieldset>
        <legend>CreateFormUpdate.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type = 'text' name = 'title' value = {title} onChange = {(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Artist</label>
                    <input type = 'text' name = 'artist' value = {artist} onChange = {(e) => setArtist(e.target.value)} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type = 'number' name = 'rating' value = {rating} onChange = {(e) => setRating(e.target.value)} />
                </div>
                <button type = 'submit'>Create new song</button>
            </form>
    </fieldset>
  )
}

export default CreateFormUpdate