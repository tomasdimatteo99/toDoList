export const menuOptions = async() => {
    switch(opt){
        case '1':
            const desc = await inputRead('Description: ');
            tasks.createTask( desc )
        break;

        case '2':
            console.log( tasks.listArr );
        break;

        case '3':
        break;

        case '4':
        break;

        case '5':
        break;

        case '6':
        break;

        case '0':
        break;
    }
}