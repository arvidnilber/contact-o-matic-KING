<template>
      <v-content>
        <v-container class="fill-height text-center">
          <v-row align="center" justify="center">
            <v-card class="px-24 py-10">
              <h1 class="text-3xl">Edit</h1>
              <div>
                <input @blur="editContact" class="bg-white focus:outline-none focus:border-b-2 border-solid border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-2xl text-center" v-model="full_name" type="text">
              </div>
            </v-card>
          </v-row>
        </v-container>
      </v-content> 
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ContactItem } from "../App.vue";
import ContactModule from '@/store/modules/ContactModule'

@Component
export default class EditContact extends Vue {
  @Prop()
  private contactItem!: ContactItem;
  private full_name: string = `${this.contactItem.first_name} ${this.contactItem.last_name}`

  editContact(contactItem: ContactItem){
    const first_name = this.full_name.split(" ")[0]
    const last_name = this.full_name.split(" ")[1]
    this.contactItem.first_name = first_name
    this.contactItem.last_name = last_name
    const updateContact = ContactModule.editContact(this.contactItem)
  }
}
</script>
<style>
</style>