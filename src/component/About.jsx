import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function About() {

    let [users, setUsers] = useState([])
    let [name, setName] = useState('lama')

    const getUsers = async (signal) => {
        console.log("component did mount")
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos",{signal})
        setUsers(data)
    }

    useEffect(() => {
        const controller = new AbortController();
        const  signal = controller.signal;
        getUsers(signal)

        return ()=>{controller.abort()}

    }, [])

    // constructor() {
    //     super()
    //     console.log("constructor")
    //     this.state = {
    //         name: 'lama',
    //         age: 27,
    //         users: []
    //     }
    // }

    // async componentDidMount() {
    //     console.log("component did mount")
    //     const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos")
    //     this.setState({ users: data })
    // }

    // componentWillUnmount() {
    //     console.log("component will un mount")
    // }

    // componentDidUpdate() {
    //     console.log("updated")
    // }

    const changeName = (n) => {
        setName(n)
    }

    return (
        <>
            {console.log("render")}
            <h1>Home</h1>
            <h2>hello {name}</h2>
            <button onClick={() => changeName("ali")}>click</button>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.title} <img src={user.thumbnailUrl} alt="" /></li>
                })}
            </ul>
        </>
    )
}
