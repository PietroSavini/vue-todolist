const { createApp } = Vue;

createApp({
  data() {
    return {
        todos: [
            {
                text: "fare la spesa",
                done : false,
            },
            {
                text: "portare il cane fuori",
                done : false,
            },
            {
                text: "andare in palestra",
                done : false,
            },
        ],

        completedTasks:[],

        newTask:{
            text:"",
            done: false,
        },

        error: false
    };
  },

  methods: {
    addTask() {
        if(this.newTask.text.length > 0) {
            this.error = false;
            this.newTask.text = this.newTask.text[0].toUpperCase() + this.newTask.text.substring(1);
    
            this.todos.unshift(this.newTask);
            this.newTask = {
                text:"",
                done:false,
            };
        } else {
            this.error = true;

            setTimeout(() => {
                this.error = false;
            }, 3000)
        }
    },
    done(index) {
        const task = index;
        if(this.todos[task].done === false){
            this.todos[task].done = true;
            this.completedTasks.push(task);
        }else{
            this.todos[task].done = false;
            this.completedTasks.splice(task);
        }
        
      }
  }
}).mount("#app");