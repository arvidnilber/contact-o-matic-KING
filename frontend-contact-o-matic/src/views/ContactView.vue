<template>
  <div class="flex flex-col justify-center align-center text-center">
      <EditContact :contactItem="contactItem"></EditContact>
      <ContactNotes :contactId="contactId"></ContactNotes>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ContactItem } from "../App.vue";
import { NoteItem } from "../App.vue";
import EditContact from '../components/EditContact.vue'
import ContactModule from '../store/modules/ContactModule'
import ContactNotes from '../components/ContactNotes.vue'

@Component({
  components: {
    EditContact,
    ContactNotes
  }
})
export default class ContactView extends Vue {
  private contactItem = {}
  created() {
    this.getContact()
  }
  getContact(){
    const contacts = ContactModule.contactList[parseInt(this.$route.params.id)]
    this.contactItem = contacts
  }
  
  get contactId(){
    return this.$route.params.id
  }
  // getContacts(id: string) {
  //   this.$http∏∏
  //     .get(`http://localhost:9292/api/v1/contacts/${id}`)
  //     .then(response => {
  //       this.contactItems = response.data;
  //     });
  // }

  // getNotes(id: string) {
  //   this.$http
  //     .get(`http://localhost:9292/api/v1/contacts/${id}/notes`)
  //     .then(response => {
  //       this.noteItems = response.data;
  //     });
  // }
}
</script>
