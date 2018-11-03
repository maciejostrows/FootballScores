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
    render(){
        return(
            <HashRouter>
            <div className={'container'}>
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Favourites}/>
                    <Route path='/competitions' component={Competitions}/>
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