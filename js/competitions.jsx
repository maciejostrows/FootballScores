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
import getCompetitionLogo from './getCompetitionLogo'

export default class Competitions extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className={'competitions'}>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2014')}
                </div>
                <div>
                    <Link to={`/competition/2014`}>La Liga</Link>
                </div>
            </div>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2021')}
                </div>
                <div>
                    <Link to={`/competition/2021`}>Premier League</Link>
                </div>
            </div>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2017')}
                </div>
                <div>
                    <Link to={`/competition/2017`}>Primeira Liga</Link>
                </div>
            </div>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2003')}
                </div>
                <div>
                    <Link to={`/competition/2003`}>Eredivisie</Link>
                </div>
            </div>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2002')}
                </div>
                <div>
                    <Link to={`/competition/2002`}>Bundesliga</Link>
                </div>
            </div>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2015')}
                </div>
                <div>
                    <Link to={`/competition/2015`}>Ligue 1</Link>
                </div>
            </div>
            <div>
                <div className={'competition-logo'}>
                    {getCompetitionLogo('2019')}
                </div>
                <div>
                    <Link to={`/competition/2019`}>Serie A</Link>
                </div>
            </div>
            </div>
        )
    }
}