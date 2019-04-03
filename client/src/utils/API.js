import axios from "axios";

export default {
  getProperties() {
    return axios.get('/api/properties');
   }
}