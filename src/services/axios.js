import axios from 'axios';

const client = () => {

    const defaultOptions = {
        baseURL : "http://symfony-api.ddev.site",
        headers: {
            'X-AUTH-TOKEN': 'test_api_key',
            'Accept': 'application/json'
        }
    }

    // Implement some interceptors for api token refresh

    return  axios.create(defaultOptions);
}

export default client();