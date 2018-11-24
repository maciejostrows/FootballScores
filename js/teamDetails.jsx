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
import TeamDetailsInfo from './teamDetailsInfo';
import TeamDetailsSquad from './teamDetailsSquad';

export default class TeamDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team: null,
            activeTab: 'info'
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

    setInfo = () => {
        this.setState({
            activeTab: 'info'
        })
    }

    setSquad = () => {
        this.setState({
            activeTab: 'squad'
        })
    }

    render(){
        if(this.state.activeTab == 'info'){
            this.componentToRender = <TeamDetailsInfo team={this.state.team} language={this.props.language}/>
        } else if(this.state.activeTab == 'squad'){
            this.componentToRender = <TeamDetailsSquad team={this.state.team} language={this.props.language}/>
        }

        return(
            <div>
                <div className={'menu'}>
                    <ul>
                        <li className={'menuItem'} onClick={this.setInfo}>{checkLanguage(this.props.language, 'Informacje', 'Info')}</li>
                        <li className={'menuItem'} onClick={this.setSquad}>{checkLanguage(this.props.language, 'Skład', 'Squad')}</li>
                    </ul>
                </div>
                <div>
                    {this.componentToRender}
                </div>
            </div>
        )
    }
}