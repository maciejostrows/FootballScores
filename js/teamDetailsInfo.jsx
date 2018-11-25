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
import FavouriteTeamSwitcher from './favouriteTeamSwitcher';

export default class TeamDetails extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        console.log(this.props.team);
        if(this.props.team !== null){
            this.activeCompetitionsTab = [];
            this.props.team.activeCompetitions.map((row, index) => {
                this.activeCompetitionsTab.push(this.props.team.activeCompetitions[index].name);
            });
        return(
            <div className={'team-details'}>
            <FavouriteTeamSwitcher favTeams={this.props.favTeams} teamId={this.props.teamId}/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={this.props.team.crestUrl}></img>
                            </td>
                        </tr>
                        <tr>
                        <td>{checkLanguage(this.props.language, 'Nazwa', 'Name')}</td>
                        <td>{this.props.team.name}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Rozgrywki', 'Competitions')}</td>
                            <td>{this.activeCompetitionsTab}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Kraj', 'Country')}</td>
                            <td>{this.props.team.area.name}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Adres', 'Address')}</td>
                            <td>{this.props.team.address}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'E-mail', 'E-mail')}</td>
                            <td>{this.props.team.email}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Witryna Web', 'Website')}</td>
                            <td><a href = {this.props.team.website}>{this.props.team.website}</a>
                            </td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Rok powstania', 'Founded')}</td>
                            <td>{this.props.team.founded}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Stadion', 'Stadium')}</td>
                            <td>{this.props.team.venue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
        } else{
            return(
                <div>Ładowanie</div>
            )
        }
    }
}