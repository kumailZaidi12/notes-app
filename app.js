const notes=require('./notes')
const yargs=require('yargs')

//Add command

yargs.command({
    command:'add',
    describe:'add the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true, //default value of demandOption=false
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){    ///this are method use we use ES6
       notes.addNote(argv.title,argv.body)
    }
})

//Remove command

yargs.command({
    command:'remove',
    describe:'remove the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true, //default value of demandOption=false
            type:'string'
        }
    },
    handler(argv){
       notes.removeNote(argv.title)
    }
})


// List command

yargs.command({
    command:'list',
    describe:'list the note',
    handler(){
        notes.listNotes()
    }
})


// Read command

yargs.command({
    command:'read',
    describe:'read the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true, //default value of demandOption=false
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)

