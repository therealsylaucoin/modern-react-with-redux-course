//setup for custom client (in order to remove the request from App)
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID DlbNqz6qXgLyS8gdsDgmxV2Bs_gx5PGZBCLQqusC3FY'
    },
})