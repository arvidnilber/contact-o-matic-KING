import {VuexModule, Module, getModule, Action, Mutation} from 'vuex-module-decorators';
import store from '@/store';
import Vue from 'vue';
import axios from 'axios';

// Defines structure of a todoItem
export interface ContactItem {
    id: string,
    company:string,
    first_name: string,
    last_name:string,
    phone: string,
    email: string,
    user_id: number
}

interface ContactObject { [id: string]: ContactItem}

@Module({dynamic: true, namespaced: true, name: "ContactModule", store: store})
class ContactModule extends VuexModule {
    public contactList : ContactObject= {};

    get contactListAsArray() {
        return Object.keys(this.contactList).map(id => this.contactList[id]);
    }

    @Mutation
    setContact(payload: ContactItem) {
        if (payload.id) Vue.set(this.contactList, payload.id, payload);
    }
    
    @Mutation
    removeContact(contactId : string) {
        Vue.delete(this.contactList, contactId);
    }
    
    @Action({rawError: true})
    async fetchAllContacts() {
        const userId = localStorage.getItem("userId")
        console.log(userId)
        if(userId) {
            const response = await axios.get(`http://localhost:9292/api/v1/users/${userId}/contacts`);
            const contacts : ContactObject = response.data;
            Object.keys(contacts).forEach((id: string) => {
                const contact = contacts[id];
                this.setContact(contact);
            })
        } else {
            console.log("Du behöver logga in för att hämta kontakter")
            return "Du behöver logga in"
        }
    }

    @Action({commit: "removeContact", rawError: true})
    async deleteContact(contactItem: ContactItem) {
        await axios.delete(`http://localhost:9292/api/v1/contacts/${contactItem.id}`);
        return contactItem.id;
    }
    
    @Action({rawError: true})
    async postContact(contactItem: ContactItem) {
        await axios.post('http://localhost:9292/api/v1/contacts', contactItem);
        return contactItem.company
    }

    @Action({rawError: true})
    async fetchSingleContact(id: string) {
        const response = await axios.get(`http://localhost:9292/api/v1/contacts/${id}`)
        return response.data
    }

    @Action({rawError: true})
    async editContact(contactItem: ContactItem) {
        console.log(contactItem, 'module')

        const response = await axios.patch(`http://localhost:9292/api/v1/contacts/${contactItem.id}`, 
        {
            company:contactItem.company, 
            first_name: contactItem.first_name,
            last_name: contactItem.last_name,
            phone: contactItem.phone,
            email: contactItem.email
        })
        return response
    }

    
    // @Action({commit: "setContact", rawError: true})
    // async createTodo(contactItem: ContactItem) {
    // let location = await this.postContact(contactItem);
    //     return await this.fetchSingleContact(location);
    // }
}
export default getModule(ContactModule);