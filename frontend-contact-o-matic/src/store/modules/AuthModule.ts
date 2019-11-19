import {VuexModule, Module, getModule, Action, Mutation} from '@bartvanvliet/vuex-module-decorators';
import store from '@/store';
import axios from 'axios';
import UsersModule from './UsersModule';
import router from '../../router'

export interface IAuthPayload {
    username: string,
    password: string
}

@Module({dynamic: true, namespaced: true, name: "AuthModule", store: store})
class AuthModule extends VuexModule {

    public isLoading : boolean = false;
    public failure : string = "";

    @Mutation
    setIsLoading(isLoading : boolean) {
        this.isLoading = isLoading;
    }

    @Mutation
    setFailure(failure : string) {
        this.failure = failure;
    }

    @Action
    authorize({username, password} : IAuthPayload) {
        this.setIsLoading(true);
        axios.post("http://localhost:9292/api/v1/users/login", {username, password})
            .then(response => {
                UsersModule.signIn(response.data.token);
                router.push({path: '/'})
            }).catch(reason => {
                console.error(reason);
                this.setFailure("Incorrect password or username!");          
            }).finally(() => {
                this.setIsLoading(false);
            });
    }

    @Action
    signOut() {
        if (!this.isLoading) {
            UsersModule.signOut();
        }
    }
    
}

export default getModule(AuthModule);