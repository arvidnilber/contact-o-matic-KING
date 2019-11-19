<template>
  <div class="border-b-2 bg-gray-200 w-full">
    <div class="contact-edit">
      <h1 class="mt-10 text-3xl font-medium">Edit contact</h1>
      <div class="edit-contact">
        <md-field>
          <md-input class="text-center" @blur="editContact" v-model="full_name"></md-input>
        </md-field>    
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ContactItem } from "../App.vue";
import ContactModule from '../store/modules/ContactModule'

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
<style scoped>
  .md-field.md-theme-default:after {
    padding-top: 5px;
    background-color: rgba(0,0,0,0) !important;
  }
  .md-field.md-focused .md-input, .md-field.md-focused .md-textarea, .md-field.md-has-value .md-input, .md-field.md-has-value .md-textarea {
    font-size: 20px !important;
    padding-bottom: 15px;
  }

  .contact-edit {
    width:400px;
    margin:0 auto;
  }

  .edit-contact {
    width:200px;
    margin: 0 auto;
  }

</style>