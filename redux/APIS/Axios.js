import axios from 'axios';

const Axios =axios.create({
    baseURL:"https://servereccomersangular.onrender.com/api/"
})

export default Axios