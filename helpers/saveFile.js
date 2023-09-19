import fs from 'fs';
const file = './localData/data.json';
export const saveData = ( data ) => fs.writeFileSync( file, JSON.stringify(data) );


export const readData = () => {
    if ( !fs.existsSync( file ) ) {
        return null;
    }

    const info = fs.readFileSync( file, { encoding: 'utf-8' } );
    const data = JSON.parse( info );
    
    console.log(info);

    return data;
}