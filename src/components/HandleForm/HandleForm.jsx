import React, { useState } from 'react'

export default function HandleForm() {



    //  Method 01

    // const[name,setName]=useState('');
    // const[email,setEmail]=useState('');
    // const[password,setPassword]=useState('');

    // const handleOnName=(e)=>{
    //     setName(e.target.value)
    // }
    // const handleOnEmail=(e)=>{
    //     setEmail(e.target.value)
    // }
    // const handleOnPassword=(e)=>{
    //     setPassword(e.target.value)
    // }

    // const userInfo={
    //     name:name,
    //     email:email,
    //     password:password
    // }

    // ===============================
    // Method 02

    // const[user,setUser]=useState({name:'',email:'',password:''})
    // const{name,email,password}=user;
    // const handleOnName=(e)=>{
    //     setUser({name:e.target.value,email,password})
    // }
    // const handleOnEmail=(e)=>{
    //     setUser({name,email:e.target.value,password})
    // }
    // const handleOnPassword=(e)=>{
    //     setUser({name,email,password:e.target.value})
    // }

    // const userInfo={
    //     name:user.name,
    //     email:user.email,
    //     password:user.password
    // }

    // ================================
    // Method 03

    const[user,setUser]=useState({name:'',email:'',password:''})
    const{name,email,password}=user;

    const handleOnChange=(e)=>{
        let fileldName=e.target.name;
        if(fileldName=="name"){
            setUser({name:e.target.value,email,password})
        }
        else if(fileldName=="email"){
            setUser({name,email:e.target.value,password})
        }
        else if(fileldName=="password"){
            setUser({name,email,password:e.target.value})
        }
    }

    const userInfo={
        name:user.name,
        email:user.email,
        password:user.password
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(userInfo);
    }
  return (
    <div>
        <form action="" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="">Name</label> <br /> <input type="text"  name='name' onChange={ handleOnChange} />
            </div>
            <div>
                <label htmlFor="">Email</label> <br /><input type="email" name='email' onChange={ handleOnChange} />
            </div>
            <div>
                <label htmlFor="">Password</label> <br /> <input type="password" name='password' onChange={ handleOnChange} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
