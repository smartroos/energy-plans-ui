<script>
import EaPlanContainer from "@src/components/ea/EaPlanContainer.vue";

export default {
    name: "App.vue",
    components: { EaPlanContainer },
    data() {
        return {
            postcode: null,
            state: null,
            plan: null,
            services: [],
        }
    },
    created() {
        this.initData();
    },
    methods: {
        initData() {
            const queryParams = new URLSearchParams(window.location.search);
            this.postcode = queryParams.get("postcode");
            this.state = queryParams.get("state");
            this.plan = queryParams.get("plan_type");
            this.services = queryParams.get("service_type");
        }
    }
}
</script>

<template>
    <v-app>
<!--        <v-container class="pa-0 ">-->
            <EaPlanContainer
                :postcode="postcode"
                :state="state"
                :plan="plan"
                :services="services"
            ></EaPlanContainer>
<!--        </v-container>-->
    </v-app>
</template>

<style scoped>

</style>
