const fs=require('fs')
const chalk=require('chalk')
const getNotes=function(){
    return "Kumail"
}



const addNote=function(title,body){
    const notes=loadAllNotes()
    const duplicateTitle=notes.filter(function(note){
        return note.title === title
    })
    if(duplicateTitle.length === 0){
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


const removeNote=function(title){
    const notes=loadAllNotes()
    const filterArray=notes.filter(function(note){
        return note.title !== title
    })
    if(filterArray.length !== notes.length){
        saveNotes(filterArray)
        console.log(chalk.bgGreen('Note removed!'))
    }else{
        console.log(chalk.bgRed('No Note Found!'))
    }
    
}

const saveNotes=function(notes){
    const stringData=JSON.stringify(notes)
    fs.writeFileSync('note.json',stringData)
}


const loadAllNotes=function(){
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
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}