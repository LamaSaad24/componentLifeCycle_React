import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            </>
        )
    }
}
