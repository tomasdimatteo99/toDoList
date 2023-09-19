import 'colors';

const showMenu = () => {
    console.clear();
    return new Promise(( resolve => {
        console.log('========================'.blue);
        console.log('    Select an option'.brightBlue);
        console.log('========================'.blue);
        console.log(`\n${'1.'.brightCyan} Create task.`);
        console.log(`${'2.'.brightCyan} All tasks.`);
        console.log(`${'3.'.brightCyan} Completed tasks.`);
        console.log(`${'4.'.brightCyan} Pending tasks.`);
        console.log(`${'5.'.brightCyan} Complete task.`);
        console.log(`${'6.'.brightCyan} Delete task.`);
        console.log(`${'0.'.brightCyan} Exit.\n`);
        console.log('======================'.blue);
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`Select an option: `, (opt) => {
            readLine.close();
            resolve(opt);
        })
    }))
}

const pause = () => {
    return new Promise(( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readLine.question(`\nPress ${'ENTER'.rainbow} to continue.\n`, (opt) => {
            readLine.close();
            resolve();
        })
    }))
}

module.exports = {
    showMenu,
    pause
}