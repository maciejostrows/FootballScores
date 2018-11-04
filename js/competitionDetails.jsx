import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Competitions from './competitions'
import checkLanguage from './functions'

export default class CompetitionDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            table: null
        }
    }

    componentDidMount(){
        fetch(`http://api.football-data.org/v2/competitions/${this.props.match.params.competitionId}/standings`, {
            headers: {
                'X-Auth-Token': '874809121d3740cfafb15bed038e6a28'
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    table: data.standings[0].table
                })
            })
    }
    
    render() {
        if (this.state.table !== null) {
            return (
                <div>
                    <Competitions/>
                    <table>
                        <tbody>
                        <tr>
                            <th>{checkLanguage(this.props.language, 'Pozycja', 'Position')}</th>
                            <th>{checkLanguage(this.props.language, 'Nazwa', 'Name')}</th>
                            <th>{checkLanguage(this.props.language, 'Rozegrane mecze', 'Played games')}</th>
                            <th>{checkLanguage(this.props.language, 'Zwycięstwa', 'Wins')}</th>
                            <th>{checkLanguage(this.props.language, 'Remisy', 'Draws')}</th>
                            <th>{checkLanguage(this.props.language, 'Porażki', 'Loses')}</th>
                            <th>{checkLanguage(this.props.language, 'Gole strzelone', 'Goals scored')}</th>
                            <th>{checkLanguage(this.props.language, 'Gole stracone', 'Goals lost')}</th>
                            <th>{checkLanguage(this.props.language, 'Bilans goli', 'Goals difference')}</th>
                            <th>{checkLanguage(this.props.language, 'Punkty', 'Points')}</th>
                        </tr>
                        {this.state.table.map((row, index) => {
                        return (<tr key={index}>
                        <td>{this.state.table[index].position}</td>
                        <td><Link to={`/team/${this.state.table[index].team.id}`}>{this.state.table[index].team.name}</Link></td>
                        <td>{this.state.table[index].playedGames}</td>
                        <td>{this.state.table[index].won}</td>
                        <td>{this.state.table[index].draw}</td>
                        <td>{this.state.table[index].lost}</td>
                        <td>{this.state.table[index].goalsFor}</td>
                        <td>{this.state.table[index].goalsAgainst}</td>
                        <td>{this.state.table[index].goalDifference}</td>
                        <td>{this.state.table[index].points}</td>
                        </tr>);
                        })}

                        </tbody>
                    </table>
                </div>
            )
        } else {
            return null;
        }
    }
}