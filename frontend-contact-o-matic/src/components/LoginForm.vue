<template>
  <div>
        <v-container class="fill-height text-center">
          <v-row class="align-center mt-40" justify="center">
            <v-card class="px-40 py-10 text-center" v-if="!usersModule.currentUser">
              <h1 class="text-3xl">Login</h1>
              <div @keydown.enter="login" class="pb-5">
                <md-field class="mt-10">
                  <label>Username</label>
                  <md-input class="md-display-2" v-model="username" type="text" label="Username"></md-input>
                </md-field>
                <md-field>
                  <label>Password</label>
                  <md-input class="md-display-2" v-model="password" type="password"></md-input>
                </md-field>
                <md-button @click="login" class="md-primary md-raised px-10">
                  Login
                </md-button>
              </div>
            </v-card>
            <v-card class="px-40 py-10 text-center" v-else>
              <h1>You are logged in</h1>
              <md-button v-on:keyup.enter="logout" @click="logout" class="md-accent md-raised">
                Logout
              </md-button>
            </v-card>
          </v-row>
        </v-container>
    <!-- <div v-if="!usersModule.currentUser">
      <p v-if="error">Incorrect username/password</p>
      <input v-model="username" placeholder="username" />
      <input type="password" v-model="password" />
      <button @click="login">Login</button>
    </div>
    <div v-else>
      <p>Logged in as {{user}}</p>
      <button @click="logout">Logout</button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import jwt from 'jsonwebtoken';
import AuthModule, {IAuthPayload} from '../store/modules/AuthModule';
import UsersModule from '../store/modules/UsersModule';
@Component
export default class LoginForm extends Vue {
  private username : string = "";
  private password : string = "";
  private authModule = AuthModule;
  private usersModule = UsersModule;

  login() {
    const authPayload : IAuthPayload = {
      username: this.username,
      password: this.password
    };

    AuthModule.authorize(authPayload);

    this.username = "";
    this.password = "";
  }

  logout() {
    AuthModule.signOut();
  }
}
</script>

<style>
</style>