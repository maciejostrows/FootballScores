import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import checkLanguage from './functions';
import getCompetitionName from './getCompetitionName';
import getCompetitionLogo from './getCompetitionLogo';

export default class FavouriteTeams extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teams: []
        }
    }

    componentDidMount(){
        
        this.test = [];
        this.props.favTeams.favTeams.map((row, index) => {
            fetch(`http://api.football-data.org/v2/teams/${this.props.favTeams.favTeams[index]}`, {
            headers: {
                'X-Auth-Token': '874809121d3740cfafb15bed038e6a28'
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    teams: [...this.state.teams, [row, data.crestUrl, data.name]]
                })
                
            })
        })
    }
    

    render(){
        if(this.props.favTeams === null){
            return(
                <div>
                    {checkLanguage(this.props.language, 'Nie masz jeszcze ulubionych rozgrywek', "You don't have favourite competitions yet")};
                </div>
            )
        } else {
            if(this.state.teams === null){
                return(
                    <div>
                        Ładowanie...
                    </div>
                )
            } else {
                //console.log(this.state.teams);
                return(
                    <div>
                        {this.state.teams.map((row, index) => {
                            return(
                                <div key={index}>
                                    <div>
                                        <img src={row[1]}/>
                                    </div>
                                    <div>
                                        <Link to={`team/${row[0]}`}>{row[2]}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            
        }
}
}