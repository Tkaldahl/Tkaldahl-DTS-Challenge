import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './SideNav.css'

class SideNav extends Component {
    renderRedirect() {
        if (this.props.redirect) {
            let url = `/season/${this.props.selectedSeason}`
            return <Redirect to={url} />
        }
    }
    render() {
        return (
            <div className="navbar">
                {this.renderRedirect()}
                <a href='/'>Live Long and Prosper!</a>
                <div className="dropdown">
                    <button className="dropbtn">Seasons</button>
                    <div className="dropdown-content">
                    <a href="/season/1" onClick={this.props.updateSeason} data-id="1">Season 1</a>
                    <a href="/season/2" onClick={this.props.updateSeason} data-id="2">Season 2</a>
                    <a href="/season/3" onClick={this.props.updateSeason} data-id="3">Season 3</a>
                    <a href="/season/4" onClick={this.props.updateSeason} data-id="4">Season 4</a>
                    <a href="/season/5" onClick={this.props.updateSeason} data-id="5">Season 5</a>
                    <a href="/season/6" onClick={this.props.updateSeason} data-id="6">Season 6</a>
                    <a href="/season/7" onClick={this.props.updateSeason} data-id="7">Season 7</a>
                </div>
                </div>
            </div>
        )
    }
}

export default SideNav