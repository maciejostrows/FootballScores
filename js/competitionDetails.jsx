import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import checkLanguage from './functions'

export default class CompetitionDetails extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        //console.log(this.props.table);
        return(
            <div>
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
                    {this.props.table.map((row, index) => {
                        return (<tr key={index}>
                            <td>{this.props.table[index].position}</td>
                            <td><Link to={`/team/${this.props.table[index].team.id}`}>{this.props.table[index].team.name}</Link></td>
                            <td>{this.props.table[index].playedGames}</td>
                            <td>{this.props.table[index].won}</td>
                            <td>{this.props.table[index].draw}</td>
                            <td>{this.props.table[index].lost}</td>
                            <td>{this.props.table[index].goalsFor}</td>
                            <td>{this.props.table[index].goalsAgainst}</td>
                            <td>{this.props.table[index].goalDifference}</td>
                            <td>{this.props.table[index].points}</td>
                        </tr>);
                    })}

                    </tbody>
                </table>
            </div>
        )
    }
}