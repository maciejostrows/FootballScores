import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component{
    render(){
        return(
            <div className={'footer'}>
                <div>Football data provided by the Football-Data.org API</div>
                <div>Created by Maciej Ostrowski</div>
                <div>
                    <a href="mailto:maciej.ostrows@gmail.com"><img src="./icons/gmail.png"></img></a>
                    <a href="https://www.linkedin.com/in/maciej-ostrowski" target="_blank"><img src="./icons/linkedin.png"></img></a>
                    <a href="https://github.com/maciejostrows" target="blank"><img src="./icons/github.png"></img></a>
                </div>
            </div>
        )
    }
}