import axios from 'axios';

function getPromos(){
    axios.get('https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions', {
        params: {
            locale:'en-US',
            country:'EE',
            allowCountries:'EE'
        }
    }).then(res => {
        let promos = res.data.data.Catalog.searchStore.elements;
        console.log(promos.filter(p => p.promotions));
    })
}

getPromos();