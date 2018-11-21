import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'header'}>
                <h1>Football Scores</h1>
                <div className={'language-buttons'}>
                    <div onClick={this.props.setPolishLanguage} className={'language-button button-polish'}></div>
                    <div onClick={this.props.setEnglishLanguage} className={'language-button button-english'}></div>
                </div>
            </div>
        )
    }
}