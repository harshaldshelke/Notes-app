// const fs= require('fs')
// fs.writeFileSync('Notes.txt','Hello! You can start printing here onwards.')
// fs.appendFileSync('Notes.txt','My name is Harshal Shelke.')
// fs.appendFileSync('Notes.txt','I am a professional Softaware developer.')
// const name=require('./utils.js')
// const add=require('./utils.js')
// const addition=add(4,6);
// const myname=name;
// console.log(myname);
// console.log(addition);

// const getNotes=require('./notes.js')
var validator=require('validator')
var chalk=require('chalk')
const yargs=require('yargs')

// const getMyNotes=getNotes();
// console.log(getMyNotes);
// console.log(validator.isEmail('harshaldshellke@gmail.com'));
// console.log(validator.isURL('https://google.com'))
// var variable='hhh';
// console.log(variable);//remember that global.variable and variable both are same thing so never use same name for global variable and normal variable
// console.log(chalk.green('success!'))

// console.log(process.argv)
// const cmd=process.argv[2];
// if(cmd==='add'){
//     console.log('Note added')
// }else if(cmd==='remove'){
//     console.log('Note removed')
// }
// console.log(yargs.argv)

// yargs.version('1.1.0')//to update version of yargs

const notes=require('./notes.js')

yargs.command({
    command:'add',
    describe:'adding a note',
    builder:{
        title:{
            describe:'adding title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Adding a new note with Title : '+argv.title+ ' . Body of my note: '+ argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'removing a note.',
    builder:{
        title:{
            describe:'Title to delete',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Removig a note.')
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing notes.',
    handler(){
        // console.log('Listing notes.')
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Reading a note.',
    builder:{
        title:{
            describe:'Read title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Reading a note.')
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse();