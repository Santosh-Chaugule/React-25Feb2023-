import React, { useState } from 'react'

export default function Register() {
    //1.Hook Variable area
    //every component can its own data

    //const [variable,setVariable]=useState(initialValue )
    const [surname, setSurname] = useState("chaugule");

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //2.Function defination area

    let sendData = () => {
        console.log("submit")
        console.log(username)
        console.log(email)
        console.log(password)

        let payload = {
            "username": username,
            "email": email,
            "password": password
        }
        console.log(payload)

        fetch(`http://localhost:1337/api/auth/local/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {
            console.log(data);
            if (data.jwt) {
                alert('Registration sucessfully')

            }
        }).catch((err) => {

        })
    }
    //3.Return Statement
    return (
        <div>
            <form >
                { }
                <input type="text" name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} id='username' placeholder='username' />


                <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} id='email' placeholder='email' />


                <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} id='password' placeholder='password' />

                <input type="button" name='submit' id='submit' onClick={sendData} />
            </form>
        </div>
    )
}
