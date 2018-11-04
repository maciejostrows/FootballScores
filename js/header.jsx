import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Tu bedzie naglowek</h1>
                <div>
                    <button onClick={this.props.setPolishLanguage}>Polski</button>
                    <button onClick={this.props.setEnglishLanguage}>English</button>
                </div>
            </div>
        )
    }
}