
//import TaskService from './task.service';

class TaskController{
    constructor(){

        //this._service = TaskService;
        this._tasks = [{name:'task1',assignee:'Gireesh'},
                        {name:'task2', assignee:'Babu'}];
    }

    get tasks(){
        return this._tasks;
    }

    set tasks(tasks){
        this._tasks = tasks;
    }
}

TaskController.$inject = [];
export default TaskController;