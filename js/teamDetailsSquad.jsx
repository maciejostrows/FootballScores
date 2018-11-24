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

export default class TeamDetailsSquad extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        this.squad = this.props.team.squad;
        console.log(this.squad);
        this.goalkeepers = [];
        this.defenders = [];
        this.midfielders = [];
        this.attackers = [];

        this.squad.map((row, index) => {
            if(this.squad[index].position == 'Goalkeeper'){
                this.goalkeepers.push(this.squad[index]);
            } else if(this.squad[index].position == 'Defender'){
                this.defenders.push(this.squad[index]);
            } else if(this.squad[index].position == 'Midfielder'){
                this.midfielders.push(this.squad[index]);
            } else if(this.squad[index].position == 'Attacker'){
                this.attackers.push(this.squad[index]);
            }
        })
        

        this.goalkeepers = this.goalkeepers.sort((a, b) => {
            if(a['shirtNumber'] === null || b['shirtNumber'] === null) return 1;
            if(a['shirtNumber'] < b['shirtNumber']) return -1;
            if(a['shirtNumber'] > b['shirtNumber']) return 1;
        });

        this.defenders = this.defenders.sort((a, b) => {
            if(a['shirtNumber'] === null || b['shirtNumber'] === null) return 1;
            if(a['shirtNumber'] < b['shirtNumber']) return -1;
            if(a['shirtNumber'] > b['shirtNumber']) return 1;
        });

        this.midfielders = this.midfielders.sort((a, b) => {
            if(a['shirtNumber'] === null || b['shirtNumber'] === null) return 1;
            if(a['shirtNumber'] < b['shirtNumber']) return -1;
            if(a['shirtNumber'] > b['shirtNumber']) return 1;
        });

        this.attackers = this.attackers.sort((a, b) => {
            if(a['shirtNumber'] === null || b['shirtNumber'] === null) return 1;
            if(a['shirtNumber'] < b['shirtNumber']) return -1;
            if(a['shirtNumber'] > b['shirtNumber']) return 1;
        });

        console.log(this.goalkeepers);
        console.log(this.defenders);
        console.log(this.midfielders);
        console.log(this.attackers);
        return(
            <div className={'team-details'}>
                <div>
                    {checkLanguage(this.props.language, 'Bramkarze', 'Goalkeepers')}
                </div>
                {this.goalkeepers.map((row, index) => {
                    return(
                        <div key={index}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Imię', 'Name')}</td>
                                    <td>{this.goalkeepers[index].name}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Narodowość', 'Nationality')}</td>
                                    <td>{this.goalkeepers[index].nationality}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Data urodzenia', 'Date of birth')}</td>
                                    <td>{this.goalkeepers[index].dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Kraj urodzenia', 'Country of birth')}</td>
                                    <td>{this.goalkeepers[index].countryOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Numer', 'Number')}</td>
                                    <td>{this.goalkeepers[index].shirtNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    )
                })}

                <div>
                    {checkLanguage(this.props.language, 'Obrońcy', 'Defenders')}
                </div>
                {this.defenders.map((row, index) => {
                    return(
                        <div key={index}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Imię', 'Name')}</td>
                                    <td>{this.defenders[index].name}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Narodowość', 'Nationality')}</td>
                                    <td>{this.defenders[index].nationality}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Data urodzenia', 'Date of birth')}</td>
                                    <td>{this.defenders[index].dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Kraj urodzenia', 'Country of birth')}</td>
                                    <td>{this.defenders[index].countryOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Numer', 'Number')}</td>
                                    <td>{this.defenders[index].shirtNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    )
                })}

                <div>
                    {checkLanguage(this.props.language, 'Pomocnicy', 'Midfielders')}
                </div>
                {this.midfielders.map((row, index) => {
                    return(
                        <div key={index}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Imię', 'Name')}</td>
                                    <td>{this.midfielders[index].name}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Narodowość', 'Nationality')}</td>
                                    <td>{this.midfielders[index].nationality}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Data urodzenia', 'Date of birth')}</td>
                                    <td>{this.midfielders[index].dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Kraj urodzenia', 'Country of birth')}</td>
                                    <td>{this.midfielders[index].countryOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Numer', 'Number')}</td>
                                    <td>{this.midfielders[index].shirtNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    )
                })}

                <div>
                    {checkLanguage(this.props.language, 'Napastnicy', 'Attackers')}
                </div>
                {this.attackers.map((row, index) => {
                    return(
                        <div key={index}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Imię', 'Name')}</td>
                                    <td>{this.attackers[index].name}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Narodowość', 'Nationality')}</td>
                                    <td>{this.attackers[index].nationality}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Data urodzenia', 'Date of birth')}</td>
                                    <td>{this.attackers[index].dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Kraj urodzenia', 'Country of birth')}</td>
                                    <td>{this.attackers[index].countryOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>{checkLanguage(this.props.language, 'Numer', 'Number')}</td>
                                    <td>{this.attackers[index].shirtNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    )
                })}
            </div>
        )
    }
}