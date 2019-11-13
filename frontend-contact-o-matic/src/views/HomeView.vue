<template>
  <div>
      <h1 class="text-3xl text-center mt-10">Welcome</h1>
      <AllContactsView/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllContactsView from '@/views/AllContactView.vue';

@Component({
  components: {
    AllContactsView
  }
})
export default class HomeView extends Vue {

}
</script>