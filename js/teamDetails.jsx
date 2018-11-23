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

export default class TeamDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team: null
        }
    }

    componentDidMount(){
        fetch(`http://api.football-data.org/v2/teams/${this.props.match.params.teamId}`, {
            headers: {
                'X-Auth-Token': '874809121d3740cfafb15bed038e6a28'
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    team: data
                })
            })
    }

    render(){
        console.log(this.state.team);
        if(this.state.team !== null){
            this.activeCompetitionsTab = [];
            this.state.team.activeCompetitions.map((row, index) => {
                this.activeCompetitionsTab.push(this.state.team.activeCompetitions[index].name);
            });
        return(
            <div className={'team-details'}>
                <table>
                    <tbody>
                        <tr>
                        <td>{checkLanguage(this.props.language, 'Nazwa', 'Name')}</td>
                        <td>{this.state.team.name}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Rozgrywki', 'Competitions')}</td>
                            <td>{this.activeCompetitionsTab}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Kraj', 'Country')}</td>
                            <td>{this.state.team.area.name}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Adres', 'Address')}</td>
                            <td>{this.state.team.address}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'E-mail', 'E-mail')}</td>
                            <td>{this.state.team.email}</td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Witryna Web', 'Website')}</td>
                            <td><Link to={this.state.team.website}>{this.state.team.website}</Link></td>
                        </tr>
                        <tr>
                            <td>{checkLanguage(this.props.language, 'Rok powstania', 'Founded')}</td>
                            <td>{this.state.team.founded}</td>
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