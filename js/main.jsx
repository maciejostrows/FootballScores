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
import Footer from './footer'
import '../sass/style.scss';

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
                //console.log(data.standings[0].table[0].team.name);
                this.setState({
                    table: data.standings[0].table
                })
            })
    }
    
    render(){
        return(
            <HashRouter>
            <div className={'container'}>
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Favourites}/>
                    <Route path='/competitions' render={() => {return <Competitions table={this.state.table} showCompetition={this.showCompetition}/>}}/>
                </Switch>
                <Footer/>

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