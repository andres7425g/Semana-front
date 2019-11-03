
import React, { Component } from 'react'
import NewsList from "../components/NewsList";
import axios from "axios";
import { NavLink } from 'react-router-dom'; 


export default class Logged extends Component {

    state = {
        news1: [],
        news2: [],
    }

    componentDidMount() {
        axios.get("https://iris.net.co/products/semana/items/620853").then(res => {
            this.setState({ news1: res.data.data });
        });
        axios.get("http://iris.net.co/products/semana/items/633525").then(res => {
            this.setState({ news2: res.data.data });
        });
    }

    render() {
        return (
            <div>
            <NavLink to={"/news/"+this.state.news1.id}><NewsList name={this.state.news1.about} /></NavLink>
            <NavLink to={"/news/"+this.state.news2.id}><NewsList name={this.state.news2.about} /></NavLink>
            </div>
        )
    }
}
