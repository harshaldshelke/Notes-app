const fs=require('fs')
const chalk=require('chalk')

const getNotes = function(){
    return "Your notes...."
}

const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter(note=>note.title===title)
    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('Note added successfully')
    }else{
        console.log('Title already in use.')
    }
}

const saveNotes=(notes)=>{
    const writeNoteJSON=JSON.stringify(notes)
    fs.writeFileSync('Notes.json',writeNoteJSON)
}

const loadNotes=()=>{
    try{
        const NotesBuffer=fs.readFileSync('Notes.json')
        const NotesBufferJSON=NotesBuffer.toString()
        return JSON.parse(NotesBufferJSON)
    }catch(e){
        return []
    }
}

const removeNotes=(title)=>{
    var TotalNotes=loadNotes()
    const existingNote=TotalNotes.filter(note=>note.title===title)
    if(existingNote.length===0){
        console.log(chalk.red.inverse('Title not found'))
    }else{
        TotalNotes=TotalNotes.filter(note=>note.title!=title)
        saveNotes(TotalNotes)
        console.log(chalk.green.inverse('note removed'))
    }
}

const listNotes=()=>{
    console.log(chalk.italic.bgCyan('Your Notes'))
    const notes=loadNotes()
    notes.forEach(note => console.log(note.title));
}

const readNote=(title)=>{
    const notes=loadNotes()
    const myNote = notes.find(note=>note.title===title)
    if(myNote===undefined){
        console.log(chalk.red('Note not found'))
    }else{
        console.log(chalk.italic.green(myNote.title)+' '+myNote.body)
    }
}

global.variable='this is global variable.'
// module.exports=getNotes;

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}