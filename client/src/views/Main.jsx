import React, {useEffect, useState} from 'react'
import CreateFormUpdate from '../components/CreateFormUpdate';
import DisplayTable from '../components/DisplayTable';
import axios from 'axios'

const Main = () => {
    const [songList, setSongList] = useState([])
    const [refresh, setRefresh] = useState(true)

    // refreshList is difference between Main and Main2

    const refreshList = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSongList(res.data))
            .catch(err => console.log(err))
    }, [refresh])

  return (
    <fieldset>
        <legend>Main.jsx</legend>
        <CreateFormUpdate updateList = {refreshList} />
        <DisplayTable songList = {songList} updateList = {refreshList} />
    </fieldset>
  )
}

export default Main