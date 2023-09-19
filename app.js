import 'colors';
import {
    inquirerMenu,
    pause,
    inputRead
} from './helpers/inquirerMenu.js';
import {
    confirm,
    modTaskStatus,
    taskList
} from './helpers/inquireTasks.js';
import {
    readData,
    saveData
} from './helpers/saveFile.js';
//import { Task } from './models/task.js';
import { Tasks } from './models/tasks.js';

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();
    const tasksData = readData();

    if ( tasksData ) {
        tasks.loadTaksFromArr( tasksData )
    }

    do {
        //Print menu.
        opt = await inquirerMenu();

        switch(opt){
            case '1': //Create task
                const desc = await inputRead('Description: ');
                tasks.createTask( desc )
            break;

            case '2': //List tasks
                tasks.tasksUI();
            break;

            case '3': //Completed tasks.
                tasks.taskStatusUI( true );
            break;

            case '4': //Uncompleted tasks.
                tasks.taskStatusUI( false );
            break;

            case '5': //Modify task status.
                const ids = await modTaskStatus( tasks.listArr )
                tasks.alternateStatus(ids)
                console.log(tasks._taskList);
            break;

            case '6': //Delete task.
                const id = await taskList( tasks.listArr );
                if( id !== '0'){
                    const confirmDelete = await confirm(`\n${'You are about to delete a task. Are you sure?'.brightBlue}\n`)
                    if( confirmDelete ){
                        tasks.deleteTask( id );
                    }
                }
            break;

            case '0':
            break;
        }

        saveData( tasks.listArr );

        if(opt !== '0') await pause();
    } while (opt !== '0');
}

main();