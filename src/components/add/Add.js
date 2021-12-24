import React,{ useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Add() {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const sendData = (e) => {
        e.preventDefault();
        if (name && login && password){
            axios.post(`https://61c33e1e9cfb8f0017a3ea5a.mockapi.io/Crud`,{
            name, 
            login,
            password,
        });
    } else window.alert("Inputs are empty !")
    
    setName('');
    setLogin('');
    setPassword('');
    }


    return (
        <div style={{display:'flex', justifyContent:'center', paddingTop:'100px'}}>
            <form class="ui form" style={{width:'300px'}}>
            <div class="field">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" />
            </div>
            <div class="field">
                <label>Login</label>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} name="login" placeholder="Login" />
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
            </div>
            <button class="ui green button"  type="submit" onClick={(e) => {sendData(e)}} >Submit</button>
            <Link to='/'>
            <button class="ui red button"  type="button" >Back to Home</button>
            </Link>
        </form>
        </div>
    )
}

export default Add
