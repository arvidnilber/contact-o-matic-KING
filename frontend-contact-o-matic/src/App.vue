<template>
    <v-app>
      <router-view></router-view>
    </v-app>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export interface ContactItem {
  id: string,
  company:string,
  first_name: string,
  last_name:string,
  phone: string,
  email: string,
  user_id: number
}

export interface NoteItem {
  id: number,
  company_id: number,
  user_id: number,
  text: string
}

export default class App extends Vue {}
</script>

<style>
</style>

