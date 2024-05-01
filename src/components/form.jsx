import { useState } from 'react'

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        };
        fetch('http://localhost:3000/login', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setUsername("");
                setPassword("");
                console.log(data);
                // note using deconstructuring is better for cleaner code
                localStorage.setItem("accessToken", data.token);
                window.location.reload();
            });
    }



    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button >Login</button>
        </form>
    </>
}

export default Form