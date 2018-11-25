export default function getCompetitionName(id){
    switch (id){
        case '2014':
        return 'La Liga';
        break;

        case '2021':
        return 'Premier League';
        break;

        case '2017':
        return 'Primeira Liga';
        break;

        case '2003':
        return 'Eredivisie';
        break;

        case '2002':
        return 'Bundesliga';
        break;

        case '2015':
        return 'Ligue 1';
        break;

        case '2019':
        return 'Serie A';
        break;
    }
}