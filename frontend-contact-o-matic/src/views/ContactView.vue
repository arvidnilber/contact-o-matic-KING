<template>
  <div class="flex justify-center align-center">
    <EditContact :contactItem="contactItem"></EditContact>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ContactItem } from "@/App.vue";
import { NoteItem } from "@/App.vue";
import EditContact from '@/components/EditContact.vue'
import ContactModule from '@/store/modules/ContactModule'
@Component({
  components: {
    EditContact
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
