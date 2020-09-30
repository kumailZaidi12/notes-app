const fs=require('fs')
const chalk=require('chalk')




const addNote=(title,body) => {
    const notes=loadAllNotes()
   
    //this filter method will check all the item if we found in the inital also
  //  const duplicateTitle=notes.filter((note) => note.title === title)
  //this will stop when item found
  const duplicateTitle=notes.find((note) => note.title === title)
    if(!duplicateTitle){ ///it will give undefined if not found if(duplicateTitle === undefined)
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('Note is added'))
    }else{
        console.log(chalk.bgRed('Note is already taken!'))
    }
   

}


const removeNote=(title) => {
    const notes=loadAllNotes()
    const filterArray=notes.filter((note) => note.title !== title)
    if(filterArray.length !== notes.length){
        saveNotes(filterArray)
        console.log(chalk.bgGreen('Note removed!'))
    }else{
        console.log(chalk.bgRed('No Note Found!'))
    }
    
}

const listNotes = () => {
    const notes = loadAllNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote =(title) =>{
    const notes=loadAllNotes()
    const findNote=notes.find((note) => note.title === title)
    if(findNote){
        console.log(cfindNote.body)
    }else{
        console.log(chalk.bgRed('No note found!'))
    }
}

const saveNotes=(notes) => {
    const stringData=JSON.stringify(notes)
    fs.writeFileSync('note.json',stringData)
}


const loadAllNotes=() => {
    try{
        const dataBuffer=fs.readFileSync('note.json')
        const dataString=dataBuffer.toString()
        const data=JSON.parse(dataString)
        return data

    }catch(e){
        return []
    }
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}