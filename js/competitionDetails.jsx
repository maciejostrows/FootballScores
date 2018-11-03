import React from 'react';
import ReactDOM from 'react-dom';

export default class CompetitionDetails extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        //console.log(this.props.table);
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Pozycja</th>
                        <th>Nazwa</th>
                        <th>Rozegrane mecze</th>
                        <th>Zwycięstwa</th>
                        <th>Remisy</th>
                        <th>Porażki</th>
                        <th>Gole strzelone</th>
                        <th>Gole stracone</th>
                        <th>Bilans goli</th>
                        <th>Punkty</th>
                    </tr>
                    {this.props.table.map((row, index) => {
                        return (<tr key={index}>
                            <td>{this.props.table[index].position}</td>
                            <td>{this.props.table[index].team.name}</td>
                            <td>{this.props.table[index].playedGames}</td>
                            <td>{this.props.table[index].won}</td>
                            <td>{this.props.table[index].draw}</td>
                            <td>{this.props.table[index].lost}</td>
                            <td>{this.props.table[index].goalsFor}</td>
                            <td>{this.props.table[index].goalsAgainst}</td>
                            <td>{this.props.table[index].goalDifference}</td>
                            <td>{this.props.table[index].points}</td>
                        </tr>);
                    })}

                    </tbody>
                </table>
            </div>
        )
    }
}