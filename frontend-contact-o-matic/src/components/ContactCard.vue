<template>
    <v-card class="mb-5 mt-5 px-5 py-5">
        <v-card-title>{{contactItem.first_name}} {{contactItem.last_name}}</v-card-title>
        <v-btn text color="primary" v-bind:to="'/contact/'+contactItem.id">See notes</v-btn>
    </v-card>
    <!-- <div class="mt-10 text-center bg-gray-400 px-16 py-10 rounded-lg shadow-lg flex flex-col">
        <p class="text-2xl font-bold">{{contactItem.first_name}} {{contactItem.last_name}}</p>
        <p>{{contactItem.company}}</p>
        <a class="text-blue-500" v-bind:href="'tel:'+contactItem.phone">{{contactItem.phone}}</a>
        <a href="/contacts/3">hej</a>
        <router-link class="text-blue-600 underline" v-bind:to="'/contact/'+contactItem.id">Show and edit</router-link>
    </div> -->

</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { ContactItem } from '../App.vue';
@Component
export default class ContactCard extends Vue {
    @Prop()
    private contactItem!: ContactItem
}
</script>

<style>

</style>