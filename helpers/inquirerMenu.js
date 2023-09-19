import inquirer from 'inquirer';
import 'colors';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: `\n${'What would you like to do?'.brightBlue}\n`,
        choices: [
            {
                value: '1',
                name: `${'1. '.brightBlue}Create task.`
            },
            {
                value: '2',
                name: `${'2. '.brightBlue}List tasks.`
            },
            {
                value: '3',
                name: `${'3. '.brightBlue}Completed tasks.`
            },
            {
                value: '4',
                name: `${'4. '.brightBlue}Uncompleted tasks.`
            },
            {
                value: '5',
                name: `${'5. '.brightBlue}Modify task status.`
            },
            {
                value: '6',
                name: `${'6. '.brightBlue}Delete task.`
            },
            {
                value: '0',
                name: `${'0. '.brightBlue}Exit.`
            },
        ]
    }
];

const pauseQuestion = [
    {
        type: 'input',
        name: 'pause',
        message: `\n\nPress ${'"ENTER"'.rainbow} to continue.\n`
    }
]

export const inquirerMenu = async() => {
    console.clear()
    console.log('===================================================='.blue);
    console.log('                 Select an option'.brightBlue);
    console.log('===================================================='.blue);

    const { option } = await inquirer.prompt(questions);

    return option;
}

export const pause = async() => {
    const pause = await inquirer.prompt(pauseQuestion);
}

export const inputRead = async( msg ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            msg,
            validate( value ){
                if ( value.length === 0 ) {
                    return 'Please enter a value.';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt( question );
    return desc;
}
