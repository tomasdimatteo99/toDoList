import 'colors';

import { Task } from './task.js';
import { saveData } from '../helpers/saveFile.js';

export class Tasks {

    _taskList = {};

    get listArr(){
        const list = [];
        //Object.keys - return an array from each key.
        Object.keys( this._taskList ).forEach( k => list.push( this._taskList[k] ) )
        return list;
    }

    constructor() {
        this._taskList = {};
    }

    loadTaksFromArr( tasks = [] ){
        tasks.forEach( task => {
            this._taskList[ task.id ] = task;  
        });
    }

    tasksUI(){
        console.log();
        this.listArr.forEach( ( task, i ) => {
            i = `${i + 1}`.brightBlue;
            console.log(`${i}. ${task.desc} --> ${task.complDate ? 'Completed.'.green : 'Uncompleted.'.red}`);
        });
    }

    taskStatusUI( status ){
        console.log();
        let i = 1;
        this.listArr.forEach( task  => {
            status
            ? task.complDate
                ? console.log(`${i++}. `.brightBlue + `${task.desc} | ${task.complDate}.`) : null
            : !task.complDate
                ? console.log(`${i++}. `.brightBlue + `${task.desc}.`) : null
        });
    }

    createTask( desc = '' ){
        const task = new Task( desc );
        this._taskList[ task.id ] = task;
    }

    deleteTask( id ){
        if(delete this._taskList[id]){
            delete this._taskList[id];
        }
    }

    alternateStatus( ids = [] ){
        ids.forEach( id => {
            const task = this._taskList[id];
            if(!task.complDate){
                this._taskList[task.id].complDate = new Date();
            }
        });
        this.listArr.forEach( t => {
            if( !ids.includes(t.id) ){
                this._taskList[t.id].complDate = null;
            }
        });
    }
}