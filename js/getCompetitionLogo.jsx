import React from 'react';
export default function getCompetitionLogo(id){
    switch (id){
        case '2014':
        return <img src='./competitionsLogos/laliga.png' className={'competition-logo'}></img>
        break;

        case '2021':
        return <img src='./competitionsLogos/premierleague.png' className={'competition-logo'}></img>
        break;

        case '2017':
        return <img src='./competitionsLogos/primeiraLiga.png' className={'competition-logo'}></img>
        break;

        case '2003':
        return <img src='./competitionsLogos/eredivisie.png' className={'competition-logo'}></img>
        break;

        case '2002':
        return <img src='./competitionsLogos/bundesliga.png' className={'competition-logo'}></img>
        break;

        case '2015':
        return <img src='./competitionsLogos/ligue1.jpeg' className={'competition-logo'}></img>
        break;

        case '2019':
        return <img src='./competitionsLogos/seriea.jpeg' className={'competition-logo'}></img>
        break;
    }
}