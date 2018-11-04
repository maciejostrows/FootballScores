import React from 'react';
import ReactDOM from 'react-dom';

export default class TeamDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team: null
        }
    }

    componentDidMount(){
        fetch(`http://api.football-data.org/v2/teams/${this.props.match.params.teamId}`, {
            headers: {
                'X-Auth-Token': '874809121d3740cfafb15bed038e6a28'
            }
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    team: data
                })
            })
    }

    render(){
        return(
            <div>
                test
            </div>
        )
    }
}