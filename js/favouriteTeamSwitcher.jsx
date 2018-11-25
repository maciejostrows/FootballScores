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

export default class FavouriteTeamSwitcher extends React.Component{
    constructor(props){
        super(props);
    }

    addToFavouritesTeams = (id) => {
        this.favTeams = this.props.favTeams;
        console.log(this.favTeams);
        this.favTeams.favTeams.push(id);
        console.log(this.favTeams);
        this.favTeams = JSON.stringify(this.favTeams);
        localStorage.setItem('favTeams', this.favTeams);

    }

    removeFromFavouritesTeams = (id) => {
        console.log(typeof id);
        this.favTeams = this.props.favTeams;
        console.log(typeof this.favTeams.favTeams[0]);
        this.favTeams.favTeams = this.favTeams.favTeams.filter((element) => {
            return element != id;
        })
        console.log(this.favTeams);
        this.favTeams = JSON.stringify(this.favTeams);
        localStorage.setItem('favTeams', this.favTeams);
    }

    render(){
        console.log(this.props.favTeams);
        if(this.props.favTeams.favTeams.indexOf(this.props.teamId) != -1){
            return(
                <div>
                    <i className={"fas fa-star star-gold"} onClick={() => {this.removeFromFavouritesTeams(this.props.teamId)}}></i>
                </div>
                
            )
        } else {
            return(
                <div>
                    <i className={"far fa-star"} onClick={() => {this.addToFavouritesTeams(this.props.teamId)}}></i>
                </div>
            )
        }
        
        
    }
}