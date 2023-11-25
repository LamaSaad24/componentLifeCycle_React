import axios from 'axios'
import React, { Component } from 'react'

export default class Home extends Component {

    constructor(){
        super()
        console.log("constructor")
        this.state={
            name:'lama',
            age:27,
            users:[]
        }
    }

    async componentDidMount(){
        console.log("component did mount")
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos") 
        this.setState({users:data})
    }

    changeName=(n)=>{
        this.setState({name:n})
    }

    componentWillUnmount(){
        console.log("component will un mount")
    }

    componentDidUpdate(){
        console.log("updated")
    }

    render() {
        console.log("render")
        return (
            <>
            <h1>Home</h1>
            <h2>hello {this.state.name}</h2>
            <button onClick={()=>this.changeName("ali")}>click</button>
            <ul>
                {this.state.users.map(user=>{
                    return <li key={user.id}>{user.title} <img src={user.thumbnailUrl} alt="" /></li>
                })}
            </ul>
            </>
        )
    }
}
