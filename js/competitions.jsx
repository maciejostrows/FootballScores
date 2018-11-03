import React from 'react';
import ReactDOM from 'react-dom';
import CompetitionDetails from './competitionDetails'

export default class Competitions extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div>
                    <span onClick={() => {
                        this.props.showCompetition(2014)
                    }}>La Liga</span>
                </div>
                <div>
                    <span onClick={() => {
                        this.props.showCompetition(2021)
                    }}>Premier League</span>
                </div>
                <div>
                    {this.props.table !== null ? <CompetitionDetails table={this.props.table}/> : null}
                </div>
            </div>
        )
    }
}