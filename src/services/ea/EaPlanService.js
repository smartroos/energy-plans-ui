import {getStateKey} from "../../data/constants/STATES";
import {SERVICE_TYPES} from "../../models/ea/EaPlanDetails";
import EaAPI from "../../api/EaAPI";

export default {
    /**
     *
     * @param query
     * @returns {Promise<EnergyPlan>}
     */
    getPlanDetailsByPlanType(query) {
        return EaAPI.getPlanDetails(this.prepareQuery(query))
    },

    prepareQuery(query) {
        const state = getStateKey(query.state)

        return {
            ...query,
            service_type:  mapServices(query.service_type),
            state: state,
        }
    }
}

export const mapServices = services => {
    if (services.includes('gas') && services.includes('power')) {
        return SERVICE_TYPES.ELECTRICITY_AND_GAS
    }
    if (services.includes('gas')) {
        return  SERVICE_TYPES.GAS
    }

    if (services.includes('power')) {
        return  SERVICE_TYPES.ELECTRICITY
    }
    throw new Error("Unknown service type")
}
