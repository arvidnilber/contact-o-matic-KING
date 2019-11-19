<template>
  <div class="note-card mt-5">
    <md-field>
      <md-textarea class="px-20" v-model="noteItem.text"></md-textarea>
    </md-field>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { NoteItem } from "../App.vue";
@Component
export default class NoteCard extends Vue {
  @Prop()
  private noteItem!: NoteItem;
}
</script>

<style scoped>
  .note-card {
   
    width: 400px;
  }
  @media screen and (max-width:600px){
    .note-card {
      width:80%;
      margin:0 auto !important;
    }
  }
</style>