import React, { Component } from 'react';
import './SideNav.css'

class SideNav extends Component {
    render() {
        return (
            <div className="navbar">
                <a href='/'>Live Long and Prosper!</a>
                <div className="dropdown">
                    <button className="dropbtn">Seasons</button>
                    <div class="dropdown-content">
                    <a href="/season/1" >Season 1</a>
                    <a href="/season/2" >Season 2</a>
                    <a href="/season/3" >Season 3</a>
                    <a href="/season/4" >Season 4</a>
                    <a href="/season/5" >Season 5</a>
                    <a href="/season/6" >Season 6</a>
                    <a href="/season/7" >Season 7</a>
                </div>
                </div>
            </div>
        )
    }
}

export default SideNav