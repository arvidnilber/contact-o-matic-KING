<template>
  <div class="mt-5 sm:w-auto w-full">
        <h2 class="text-3xl">Notes</h2>
        <div>
            <CreateNote></CreateNote>
        </div>
        <div v-if="noteModule.noteListAsArray">
            <NoteCard v-for="noteItem in noteModule.noteListAsArray" :key="noteItem.id" :noteItem="noteItem"></NoteCard>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NoteModule from '../store/modules/NoteModule'
import NoteCard from '../components/NoteCard.vue'
@Component({
    components: {
        NoteCard
    }
})
export default class ContactNotes extends Vue {
    private noteModule = NoteModule
    private contactId: string = ""
    created() {
        this.contactId = this.$attrs.contactId
        console.log(this.contactId, 'inuti')
        NoteModule.fetchAllNotesFromUser(this.contactId)
    }
}
</script>

<style>

</style>