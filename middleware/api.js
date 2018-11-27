import {config} from './config'
import Axios from 'axios';

export default {
    getAlbumData() {
        let api = `${config.development.API_URL}topalbums/limit=100/json`;
        return Axios.get(api).then((d)=>{return d})
    }
}