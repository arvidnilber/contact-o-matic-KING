<template>
    <v-container fluid>
        <v-col cols="12">
            <v-row align="center" justify="center">
                <ContactCard v-for="contactItem in contactModule.contactListAsArray" v-bind:key="contactItem.id" v-bind:contactItem="contactItem" class="mr-5"/>
            </v-row>
        </v-col>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ContactItem } from '@/App.vue';
import ContactCard from '@/components/ContactCard.vue'
import jwt from 'jsonwebtoken';
import ContactModule from '@/store/modules/ContactModule'

@Component({
    components: {
        ContactCard
    }
})

export default class AllContactsView extends Vue {
    private contactModule = ContactModule
    created() {
        ContactModule.fetchAllContacts();
    }
    // private getUser() {
    //     const token = this.access_token;
    //     if (token) {
    //         const decoded : any = jwt.decode(token)
    //         return decoded ? decoded.id : "";
    //     }
    //     return token;
    // }
    // private async getContacts() : Promise<any> {
    //     const user = await this.getUser()
    //     this.$http.get(`http://localhost:9292/api/v1/users/${user}/contacts`)
    //         .then ( response  => { this.contactItems = response.data; })
    // }

}
</script>

<style>

</style>