<template>
    <div> 
        <div v-if="!user">
            <p v-if="error">Incorrect username/password</p>
            <input v-model="username" placeholder="username">
            <input type="password" v-model="password">
            <button @click="login">Login</button>
        </div>
        <div v-else>
            <p>Logged in as {{user}}</p>
            <button @click="logout">Logout</button>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import jwt from 'jsonwebtoken';

@Component
export default class LoginForm extends Vue {
    private username : string = "";
    private password : string = "";
    private access_token : string | null = "";
    private error : boolean = false

    created(){

    }

    async login(){
      const response = await this.$http.post('http://localhost:9292/api/v1/users/login', {
        username: this.username,
        password: this.password
      })
      this.access_token = response.data.token;
      if (this.access_token){
        localStorage.setItem('access_token', this.access_token);  
        localStorage.setItem('userId', await this.user)
        this.error = false;
      } else {
        this.error = true
      }
    }
    logout(){
        localStorage.removeItem('access_token');
        this.access_token = null;
        this.error = false;
    }

     get user() {
        const token = this.access_token;
        if (token) {
            const decoded : any = jwt.decode(token)
            return decoded ? decoded.id : "";
        }
        return token;
    }
}
</script>

<style>

</style>