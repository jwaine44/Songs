import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

// 1. grab information on load, so need Axios and useEffect
// 2. need to store info with useState

const DisplayTable = (props) => {
    // all songs will be an array of objects that looks like [{title: name of song}, {}, {}]

    // const handleDelete = (deleteId) => {
    //     // When we click the button, we want to:
    //     // 1. delete the item from the database
    //     // 2. update the list at the parent
    //     axios.delete(`http://localhost:8000/api/songs/${deleteId}`)
    //         .then(res => props.updateList(deleteId))
    //         .catch(err => console.log(err))
    // }

    return (
        <fieldset>
            <legend>DisplayTable.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.songList.map((song, i) => {
                            return(
                                <tr key = {i}>
                                    <td><Link to = {`/songs/${song._id}`}>{song.title}</Link></td>
                                    <td>{song.artist}</td>
                                    <td>{song.rating}</td>
                                    <td><Link to = {`/songs/${song._id}/edit`}>Edit</Link></td>
                                    <td><DeleteButton deleteId = {song._id} onDelete = {props.updateList}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
  )
}

export default DisplayTable