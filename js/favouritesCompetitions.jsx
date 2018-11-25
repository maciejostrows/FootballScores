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

export default class FavouritesCompetitions extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        console.log(this.props.favCompetitions);
        

        if(this.props.favCompetitions === null){
            return(
                <div>
                    {checkLanguage(this.props.language, 'Nie masz jeszcze ulubionych rozgrywek', "You don't have favourite competitions yet")};
                </div>
            )
        } else {
            return(
                <div className={'ulubione-rozgrywki'}>
                    {this.props.favCompetitions.favCompetitions.map((row, index) => {
                        return(
                            <div key={index}>
                                <div>
                                    {getCompetitionLogo(this.props.favCompetitions.favCompetitions[index])}
                                </div>
                                <div>
                                    <Link to={`/competition/${this.props.favCompetitions.favCompetitions[index]}`}>{getCompetitionName(this.props.favCompetitions.favCompetitions[index])}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
}
}