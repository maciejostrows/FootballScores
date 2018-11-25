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

export default class FavouriteCompetitionsSwitcher extends React.Component{
    constructor(props){
        super(props);
    }

    addToFavouritesCompetitions = (id) => {
        this.favCompetitions = this.props.favCompetitions;
        console.log(this.favCompetitions);
        this.favCompetitions.favCompetitions.push(id);
        console.log(this.favCompetitions);
        this.favCompetitions = JSON.stringify(this.favCompetitions);
        localStorage.setItem('favCompetitions', this.favCompetitions);

    }

    removeFromFavouritesCompetitions = (id) => {
        console.log(typeof id);
        this.favCompetitions = this.props.favCompetitions;
        console.log(typeof this.favCompetitions.favCompetitions[0]);
        this.favCompetitions.favCompetitions = this.favCompetitions.favCompetitions.filter((element) => {
            return element != id;
        })
        console.log(this.favCompetitions);
        this.favCompetitions = JSON.stringify(this.favCompetitions);
        localStorage.setItem('favCompetitions', this.favCompetitions);
    }

    render(){
        console.log(this.props.favCompetitions);
        if(this.props.favCompetitions.favCompetitions.indexOf(this.props.competitionId) != -1){
            return(
                <div>
                    <i className={"fas fa-star star-gold"} onClick={() => {this.removeFromFavouritesCompetitions(this.props.competitionId)}}></i>
                </div>
                
            )
        } else {
            return(
                <div>
                    <i className={"far fa-star"} onClick={() => {this.addToFavouritesCompetitions(this.props.competitionId)}}></i>
                </div>
            )
        }
        
        
    }
}