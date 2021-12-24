import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Update() {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(null);

    const sendData = (e) => {
        e.preventDefault()
        if (name && login && password){
            axios.put(`https://61c33e1e9cfb8f0017a3ea5a.mockapi.io/Crud/${id}`,{
            name, 
            login,
            password
        });
        } else {
            window.alert("Inputs are empty !")
        }
    }

    useEffect(() => {
        setName(window.localStorage.getItem("name"));
        setLogin(window.localStorage.getItem("login"));
        setPassword(window.localStorage.getItem("password"));
        setId(window.localStorage.getItem("id"));
    },[])

    return (
        <div style={{display:'flex', justifyContent:'center', paddingTop:'100px'}}>
            <form class="ui form" style={{width:'300px'}}>
            <div class="field">
                <label>Name</label>
                <input 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                name="name" 
                placeholder="Name" />
            </div>
            <div class="field">
                <label>Login</label>
                <input 
                type="text" 
                onChange={(e) => setLogin(e.target.value)} 
                value={login} 
                name="login" 
                placeholder="Login" />
            </div>
            <div class="field">
                <label>Password</label>
                <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                name="password" 
                placeholder="Password" />
            </div>
            <button 
            class="ui green button"  
            type="submit" 
            onClick={(e) => {sendData(e)}} >Submit</button>
            <Link to='/'>
            <button class="ui red button"  type="button" >Back to Home</button>
            </Link>
        </form>
        </div>
    )
}

export default Update
