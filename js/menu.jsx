import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Menu extends React.Component{
    render(){
        return(
            <div className={'menu'}>
                <ul>
                    <li className={'menuItem'}>
                        <Link to='/'>Ulubione</Link>
                    </li>
                    <li className={'menuItem'}>
                        <Link to='/competitions'>Rozgrywki</Link>
                    </li>
                </ul>
            </div>
        )
    }
}