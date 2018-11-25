import React from 'react';
import ReactDOM from 'react-dom';
import checkLanguage from './functions';
import FavouritesCompetitions from './favouritesCompetitions';
import FavouriteTeams from './favouriteTeams'

export default class Favourites extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.favCompetitions = JSON.parse(localStorage.getItem('favCompetitions'));
    // }

    

    render(){
        this.favCompetitions = JSON.parse(localStorage.getItem('favCompetitions'));
        this.favTeams = JSON.parse(localStorage.getItem('favTeams'));
        console.log(this.favCompetitions);
        console.log(this.favTeams);
        return(
            <div className={'favourites'}>
                <div className={'pozycja'}>
                    {checkLanguage(this.props.language, 'Ulubione rozgrywki', 'Favourite competitions')}
                </div>
                <FavouritesCompetitions language={this.props.language} favCompetitions={this.favCompetitions}/>
                <div className={'pozycja'}>
                    {checkLanguage(this.props.language, 'Ulubione druźyny', 'Favourite teams')}
                </div>
                <FavouriteTeams language={this.props.language} favTeams={this.favTeams}/>
                
                
            </div>
        )
    }
}