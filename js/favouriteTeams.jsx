import React from 'react';
import ReactDOM from 'react-dom';
import checkLanguage from './functions';
import getCompetitionName from './getCompetitionName';
import getCompetitionLogo from './getCompetitionLogo';

export default class FavouriteTeams extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){

        this.teamsTab = [];
        this.teamsObject = {favTeams: []}
        this.props.favTeams.favTeams.map((row, index) => {
            fetch(`http://api.football-data.org/v2/teams/${this.props.favTeams.favTeams[index]}`, {
            headers: {
                'X-Auth-Token': '874809121d3740cfafb15bed038e6a28'
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.teamsTab.push([data.crestUrl, data.name]);
            })
        })
        this.teamsObject = {favTeams: this.teamsTab};

        // console.log(this.props.favTeams);
        // console.log(this.teamsTab);
        // console.log(this.teamsObject.favTeams);
        

        if(this.props.favTeams === null){
            return(
                <div>
                    {checkLanguage(this.props.language, 'Nie masz jeszcze ulubionych rozgrywek', "You don't have favourite competitions yet")};
                </div>
            )
        } else {
            return(
                <div>
                    {this.teamsTab.map((row, index) => {
                        return(
                            <div>
                                test
                            </div>
                        )
                    })}
                </div>
            )
        }
}
}