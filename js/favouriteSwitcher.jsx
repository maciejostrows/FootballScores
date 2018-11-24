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

export default class FavouriteSwitcher extends React.Component{
    constructor(props){
        super(props);
    }

    addToFavourites = (id) => {
        this.favCompetitions = this.props.favCompetitions;
        console.log(this.favCompetitions);
        this.favCompetitions.favCompetitions.push(id);
        console.log(this.favCompetitions);
        this.favCompetitions = JSON.stringify(this.favCompetitions);
        localStorage.setItem('favCompetitions', this.favCompetitions);

    }

    render(){
        console.log(this.props.favCompetitions);
        if(this.props.favCompetitions.favCompetitions.indexOf(this.props.competitionId) != -1){
            return(
                <div>
                    <i className={"fas fa-star"} onClick={() => {this.removeFromFavourites(this.props.competitionId)}}></i>
                </div>
                
            )
        } else {
            return(
                <div>
                    <i className={"far fa-star"} onClick={() => {this.addToFavourites(this.props.competitionId)}}></i>
                </div>
            )
        }
        
        
    }
}