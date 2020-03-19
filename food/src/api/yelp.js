import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer 0JOsdAGWS8M6Et2trKOLxplC68CDqkr21li6q0Vps4V2jZ9gVNCOy_MobErrK4zg8jzE2TjfeNB5rldfLNuL3lRx8NzSKwy6s-XhDzfIzc6IFcEaLKD-pKtmVOlxXnYx',
    }
});

