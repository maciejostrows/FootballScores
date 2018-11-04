import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import CompetitionDetails from './competitionDetails'
import TeamDetails from './teamDetails'

export default class Competitions extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div>
                    <Link to={`/competition/2014`}>La Liga</Link>
                </div>
                <div>
                    <Link to={`/competition/2021`}>Premier League</Link>
                </div>
            </div>
        )
    }
}