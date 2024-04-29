import { makeAutoObservable } from "mobx";

export interface Todo {
    id : number;
    title: string;
    content : string;
    checked : boolean;
}

class TodoStore {

    todo: Todo[];
    currentId: number;

    constructor() {

        makeAutoObservable(this, {}, { autoBind: true })

        this.todo = []
        this.currentId= 0

    }
    
    addTodo(title: string, content:string):void {

        this.todo.push({id: this.currentId, title, content, checked:false})
        this.currentId++;
    }

    toggleTodo(id:number):void {
        const index = this.todo.findIndex((v)=>v.id===id);
        if(id !== -1) {
            this.todo[index].checked = !this.todo[index].checked
        }
    }

    // removeTodo(id:number):void {
    //     const index = this.todo.findIndex((v)=>v.id == id);
    //     if(id !==-1){
    //         this.todo.
    //     }
    // }
}


// 5
export const todoStore = new TodoStore()