import { action, comparer, computed, makeAutoObservable, observable } from "mobx";

export interface Todo {
    id : number;
    title: string;
    content : string;
    checked : boolean;
}

class TodoStore {

    todos: Todo[];
    currentId: number;

    constructor() {

        makeAutoObservable(this, {
            todos: observable,
            currentId: observable,
            addTodo: action,
            removeTodo: action,
            updateTodo: action,
            unfinishedTodoCount: computed
        })

        this.todos = []
        this.currentId= 0

    }

    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.checked).length
    }

    addTodo(title: string, content:string):void {

        this.todos.push({id: this.currentId, title, content, checked:false})
        this.currentId++;
    }

    toggleTodo(id:number):void {
        const index = this.todos.findIndex((v)=>v.id===id);
        if(id !== -1) {
            this.todos[index].checked = !this.todos[index].checked
        }
    }

    removeTodo(id:number):void {
        const index = this.todos.findIndex((v)=>v.id == id);
        if(id !==-1){
            this.todos.splice(index)
       }
    }

    updateTodo(id: number, title: string, content: string){
        const index = this.todos.findIndex((v)=>v.id == id);
        if(id !== -1){
            if(title != null){
                this.todos[index].title = title;
            }
            else if(content != null){
                this.todos[index].content = content;
            }
        }
    }
}


// 5
export const todoStore = new TodoStore()