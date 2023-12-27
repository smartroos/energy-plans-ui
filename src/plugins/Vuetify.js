import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#5C229A'
            },
        },
    },
};

export default new Vuetify(opts);
