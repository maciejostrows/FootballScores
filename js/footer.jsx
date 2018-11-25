import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component{
    render(){
        return(
            <div className={'footer'}>
                <div>Football data provided by the Football-Data.org API</div>
                <div>Created by Maciej Ostrowski</div>
            </div>
        )
    }
}