<script>
import EaPlanContainer from "@src/components/ea/EaPlanContainer.vue";

export default {
    name: "App.vue",
    components: { EaPlanContainer },
    data() {
        return {
            postcode: 3044,
            state: "VIC",
            plan: 'balance_plan',
            services: ['gas', 'power']
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
