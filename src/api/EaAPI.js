import axios from 'axios';
import {createEAPlanDetails} from "@src/factories/EaPlan";


const ROOT = `${process.env.MIX_BOT_ROOT_URL}/hood-dashboard/api`;

export default {
    async getPlanDetails(query) {
        const data = (await axios.get(`${ROOT}/ea-plans/${query.plan_type}`, {params: query})).data.data
        return createEAPlanDetails(data, query.plan_type);
    }
}
