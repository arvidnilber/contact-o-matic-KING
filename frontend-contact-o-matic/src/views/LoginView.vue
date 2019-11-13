<template>
<div> 
    <p>hej</p>
    <LoginForm/>
</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import jwt from 'jsonwebtoken';
import LoginForm from '@/components/LoginForm.vue';

@Component({ //Declares that App is a Vue Component
  components: { //AND lists which other components (TodoItemListComponent, TodoItemCreateForm) it contains
      LoginForm   
  }
})
export default class LoginView extends Vue {}

</script>