import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Header from './header';
import Menu from './menu';
import Favourites from './favourites';
import Competitions from './competitions';
import TeamDetails from './teamDetails'
import Footer from './footer'
import '../sass/style.scss';

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: 'pol',
            table: null
        }
    }

    showCompetition = (id) => {
        fetch(`http://api.football-data.org/v2/competitions/${id}/standings`, {
            headers: {
                'X-Auth-Token': '874809121d3740cfafb15bed038e6a28'
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    table: data.standings[0].table
                })
            })
    }

    setPolishLanguage = () => {
        this.setState({
            language: 'pol'
        })
    }

    setEnglishLanguage = () => {
        this.setState({
            language: 'eng'
        })
    }
    
    render(){
        return(
            <HashRouter>
            <div className={'container'}>
                <Header language={this.state.language} setPolishLanguage={this.setPolishLanguage} setEnglishLanguage={this.setEnglishLanguage}/>
                <Menu language={this.state.language}/>
                <Switch>
                    <Route exact path='/' render={() => {return <Favourites language={this.state.language}/>}}/>
                    <Route path='/competitions' render={() => {return <Competitions table={this.state.table} showCompetition={this.showCompetition} language={this.state.language}/>}}/>
                    <Route path='/team/:teamId' render={(props) => {return <TeamDetails table={this.state.table} showCompetition={this.showCompetition} language={this.state.language} {...props}/>}}/>
                </Switch>
                <Footer language={this.state.language}/>

            </div>
            </HashRouter>


        )
    }
}

document.addEventListener("DOMContentLoaded", function(){

    ReactDOM.render(
        <Container/>,
        document.getElementById('App')
    );

});