import React, {useEffect, useState} from 'react'
import DisplayTable from '../components/DisplayTable'
import axios from 'axios'

const Dashboard = () => {

const [songList, setSongList] = useState([])

useEffect(() => {
    axios.get(`http://localhost:8000/api/songs`)
        .then(res => setSongList(res.data))
        .catch(err => console.log(err))
}, [])

const removeFromList = (deleteId) => {
  const filteredList = songList.filter((eachSong, i) => {
    return(
      eachSong._id !== deleteId
    )
  })
  setSongList(filteredList)
}

// updateList below comes from DisplayTable line 16

  return (
    <fieldset>
        <legend>Dashboard.jsx</legend>
        <h1>Dashboard</h1>
        {
            songList?
            <DisplayTable songList = {songList} updateList = {removeFromList}/>:
            <h1>No songs now</h1>
        }
    </fieldset>
  )
}

export default Dashboard