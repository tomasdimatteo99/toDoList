import 'colors';
import inquirer from 'inquirer';



export const taskList = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        const idx = `${i + 1}`.brightBlue;

        return{
            value: task.id,
            name: `${idx}. ${task.desc}.`
        }
    })

    choices.unshift({
        value: '0',
        name: '0. '.brightBlue + 'Exit.'
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: `\n${'What would you like to delete?'.brightBlue}\n`,
            choices
        }
    ]

    const { id } = await inquirer.prompt(question)
    return id;
}

export const modTaskStatus = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        const idx = `${i + 1}`.brightBlue;

        return{
            value: task.id,
            name: `${idx}. ${task.desc}.`,
            checked: ( task.complDate ) ? true : false

        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: `\n${'Select the task you want to change to completed/uncompleted.'.brightBlue}\n`,
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question)
    return ids;
}

export const confirm = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const{ ok } = await inquirer.prompt( question );

    return ok;
}
