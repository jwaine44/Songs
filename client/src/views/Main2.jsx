import React, {useEffect, useState} from 'react'
import CreateFormUpdate from '../components/CreateFormUpdate';
import DisplayTable from '../components/DisplayTable';
import axios from 'axios'

const Main2 = () => {
    const [songList, setSongList] = useState([])

    // refreshList is difference between Main and Main2

    const refreshList = (newSong) => {
        setSongList([...songList, newSong])
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSongList(res.data))
            .catch(err => console.log(err))
    }, [])

// updateList below comes from updateList in CreateFormUpdate line 21

  return (
    <fieldset>
        <legend>Main2.jsx</legend>
        <CreateFormUpdate updateList = {refreshList} />
        <DisplayTable songList = {songList} />
    </fieldset>
  )
}

export default Main2