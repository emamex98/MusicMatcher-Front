import React, { Component } from 'react';
import MatchProfile from './MatchProfile';
export default class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard container">
                <div className= "row">
                    <div className="col s12 m6">
                        <MatchProfile/>
                    </div>
                </div>
            </div>
        )
    }
}