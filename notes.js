const fs=require('fs')
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
        console.log('Note is added')
    }else{
        console.log('Note is already taken!')
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
    addNote:addNote
}