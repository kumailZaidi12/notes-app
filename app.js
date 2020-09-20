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
    handler:function(argv){
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
    handler:function(argv){
       notes.removeNote(argv.title)
    }
})


// List command

yargs.command({
    command:'list',
    describe:'list the note',
    handler:function(){
        console.log('Listing out all notes')
    }
})


// Read command

yargs.command({
    command:'read',
    describe:'read the note',
    handler:function(){
        console.log('Reading the note')
    }
})
yargs.parse()
//console.log(yargs.argv)

