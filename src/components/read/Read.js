import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(`https://61c33e1e9cfb8f0017a3ea5a.mockapi.io/Crud`)
        .catch(e => console.log(e.message))
        setData(res.data)
    }

    useEffect(() => {
        getData();
    }, [])

    const updateData = (id,name,login,password) => {
        window.localStorage.setItem("id",id);
        window.localStorage.setItem("name",name);
        window.localStorage.setItem("login",login);
        window.localStorage.setItem("password",password);
    };

    const deleteData = (id) => {
        axios.delete(`https://61c33e1e9cfb8f0017a3ea5a.mockapi.io/Crud/${id}`)
        .catch(e => console.log(e.message));
        getData();
    }
    return (
        <div class='ui container' style={{paddingTop:'40px'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Link to='/add' >
                <button class='ui green button'>
                <i class="pencil alternate icon" style={{fontSize:'18px'}} ></i> <span style={{fontSize:'20px'}}> +</span>
                </button>
                </Link> 
            </div>
            <h2 style={{textAlign:'center', marginBottom:'40px'}} >CRUD operations</h2>
            <table class="ui fixed single line celled table inverted violet table">
                <thead>
                    <tr><th>Name</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr></thead><tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.login}</td>
                                <td>{item.password}</td>
                                <td>
                                <Link to='/update'>
                                <button onClick={() => updateData(item.id, item.name, item.login, item.password)}  class='ui primary button' ><i class="edit icon" style={{fontSize:'15px', marginLeft:'2px'}}></i></button>
                                </Link>
                                <button onClick={() => deleteData(item.id)} class='ui red button' ><i class="trash icon" style={{fontSize:'15px', marginLeft:'2px'}}></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Read
