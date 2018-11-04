import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import checkLanguage from './functions'

export default class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={'menu'}>
                <ul>
                    <li className={'menuItem'}>
                        <Link to='/'>{checkLanguage(this.props.language, 'Ulubione', 'Favourites')}</Link>
                    </li>
                    <li className={'menuItem'}>
                        <Link to='/competitions'>{checkLanguage(this.props.language, 'Rozgrywki', 'Competitions')}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}