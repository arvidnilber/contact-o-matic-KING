import {VuexModule, Module, getModule, Action, Mutation} from '@bartvanvliet/vuex-module-decorators';
import store from '@/store';
import jwt from 'jsonwebtoken';

interface IDecodedPayload {
    id : string
}

@Module({dynamic: true, namespaced: true, name: "UsersModule", store: store, preserveState: true})
class UsersModule extends VuexModule {
    public currentUser : string = "";
    public accessToken : string = "";

    @Mutation
    setAccessToken(token : string) {
        this.accessToken = token;
    }


    @Mutation
    setCurrentUser(currentUser : string) {
        this.currentUser = currentUser;
    }

    @Action
    signIn(token : string) {
        const decoded : IDecodedPayload = jwt.decode(token) as IDecodedPayload;
        if (decoded) {
            this.setAccessToken(token);
            this.setCurrentUser(decoded.id);
        }
    }

    @Action
    signOut() {
        this.setAccessToken("");
        this.setCurrentUser("");
    }
    
}

export default getModule(UsersModule);