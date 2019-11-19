import {VuexModule, Module, getModule, Action, Mutation} from '@bartvanvliet/vuex-module-decorators';
import store from '@/store';
import Vue from 'vue';
import axios from 'axios';

// Defines structure of a todoItem
export interface NoteItem {
    id: string,
    company_id:string,
    user_id: number,
    text: string
}

interface NoteObject { [id: string]: NoteItem}

@Module({dynamic: true, namespaced: true, name: "NoteModule", store: store, preserveState: true})
class NoteModule extends VuexModule {
    public noteList : NoteObject= {};
    get noteListAsArray() {
        return Object.keys(this.noteList).map(id => this.noteList[id]);
    }

    @Mutation
    setNote(payload: NoteItem) {
        if (payload.id) Vue.set(this.noteList, payload.id, payload);
    }
    
    @Mutation
    removeNote(id : string) {
        Vue.delete(this.noteList, id);
    }
    
    @Action({rawError: true})
    async fetchAllNotesFromUser(contactId: string) {
        console.log(contactId, 'notes')
        if(contactId) {
            const response = await axios.get(`http://localhost:9292/api/v1/contacts/${contactId}/notes`); 
            const notes: NoteObject = response.data;    
            console.log(response.data, 'notes data')            
            Object.keys(notes).forEach((id: string) => {
                const note = notes[id];
                this.setNote(note);
            })
        } else {
            console.log("Du behöver logga in för att hämta anteckningar")
            return "Du behöver logga in"
        }
    }

    @Action({commit: "removeNote", rawError: true})
    async deleteNote(noteItem: NoteItem) {
        await axios.delete(`http://localhost:9292/api/v1/notes/${noteItem.id}`);
        return noteItem.id;
    }
    
    @Action({rawError: true})
    async postNote(noteItem: NoteItem) {
        await axios.post('http://localhost:9292/api/v1/notes', noteItem);
        return noteItem.text
    }

    @Action({rawError: true})
    async fetchSingleNote(noteItem: NoteItem) {
        const response = await axios.get(`http://localhost:9292/api/v1/notes/${noteItem.id}`)
        return response.data
    }

    @Action({rawError: true})
    async editNote(noteItem: NoteItem) {
        const response = await axios.patch(`http://localhost:9292/api/v1/notes/${noteItem.id}`, noteItem)
        return response
    }

    
    // @Action({commit: "setContact", rawError: true})
    // async createTodo(noteItem: noteItem) {
    // let location = await this.postContact(noteItem);
    //     return await this.fetchSingleContact(location);
    // }
}
export default getModule(NoteModule);