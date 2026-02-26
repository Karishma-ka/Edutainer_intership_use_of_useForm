import React  from 'react'
import {useForm} from 'react-hook-form'

function Loginsinfo() {
    const {register, handleSubmit ,formState:{errors}} = useForm(); 
  return (
    <>
    <h1>Login Form</h1>
    </>
  )
}

export default Loginsinfo