import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/Vuetify';
import {round, replace} from "lodash";


Vue.filter('price_with_4_decimal', value => {
    if (!value) {
        return value;
    }
    let floatRegx = /(\d+.\d+)/g
    let newValue = replace(value, floatRegx, '#####')

    let num = value.match(floatRegx)
    let roundedPrice = num ?  round(num[0], 4) : '';
    return num ?  replace(newValue, '#####', roundedPrice) : value;
})

const app = new Vue({
    render: h => h(App),
    vuetify: vuetify,
}).$mount('#app');
