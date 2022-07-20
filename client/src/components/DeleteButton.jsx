import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    // for DeleteButton need to get deleteId from props
    // get onDelete method from props in Details

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/songs/${props.deleteId}`)
            .then(res => props.onDelete(props.deleteId))
            .catch(err => console.log(err))
    }

  return (
    <button onClick={() => handleDelete()}>Delete</button>
  )
}

export default DeleteButton