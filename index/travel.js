function travelNotes(){
    "use strict";

    let noteOutput = document.querySelector('.note-output');

    let addNoteBtn = document.getElementById('add-note');

    let inputNote = document.getElementById('input-note');

    //let deleteAll = document.getElementById('notes-delete');

    

    addNoteBtn.addEventListener('click', () => {
        createNote(inputNote, noteOutput);
    });


    inputNote.addEventListener('keypress', (e) => {
        if(e.keypress === 13){
            createNote(inputNote, noteOutput);
        }
    });
    /*
    deleteAll.addEventListener('click', () => {
        let notes = noteOutput.querySelectorAll('p');
        for (let note of notes){
            note.remove();
        }
    });
    */
}

    travelNotes();


function createNote(input, output){
    let p = document.createElement('p');

    let inputVal = input.value;


    if (inputVal !== ''){
        let noteText = document.createTextNode(inputVal);

        p.appendChild(noteText);

        output.appendChild(p);

        input.value = '';
        console.log('button clicked');
    }
}

       
    

