import React  from 'react'
import {useForm} from 'react-hook-form';

function Loginsinfo() {
    const {register, handleSubmit ,formState:{errors}} = useForm(); 
    const onSubmit = (data) =>{
      console.log(data);
    }
  return (
    <>
    <form style={{marginLeft: '100px',marginTop:'100px'}} onSubmit={handleSubmit(onSubmit)}>
      <label>Enter Email-ID:</label>
      <input type="email" 
      style={{marginLeft:'10px'}}
      {...register('email',{reuired:true,pattern: /^\S+@\S+$/i})}/>
      {errors.email && <p>Email is required and must be a vaild email.</p>}
      <br/>  
       <label>Enter password:</label>
      <input type="password"
      style={{marginLeft:'10px'}}></input>   
      <br/>
      <button type="submit" 
      style={{marginLeft:'150px'}}>Submit</button>   
      </form>
    </>
  )
}

export default Loginsinfo