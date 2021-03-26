import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledDiv = styled.div `
    position: absolute;
    height: 100%;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Register = () => {

    const [formData, setFormData] = useState();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        fetch('https://keeping-note.herokuapp.com/api/register', { //in aceasta functie se seteaza localstorage
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status === 200) {
          // eu sunt logat
          return res.json();
        }
  
      }).then(() => {
        return history.push('/login');
        })
    } 

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
          });
    }

    return(
        <StyledDiv>
            <form>
                <input placeholder = "username" name = "username" onChange = {handleChange}></input>
                <input placeholder = "password" name = "password" type = "password" onChange = {handleChange}></input>
                <button onClick = {handleClick}>Register</button>
            </form>
        </StyledDiv>
    )
}

export default Register;