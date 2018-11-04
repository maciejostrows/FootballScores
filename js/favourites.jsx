import React from 'react';
import ReactDOM from 'react-dom';
import checkLanguage from './functions'

export default class Favourites extends React.Component{
    render(){
        return(
            <div>
                {checkLanguage(this.props.language, 'Jeszcze nie masz ulubionych', "There's no favourites yet")}
            </div>
        )
    }
}