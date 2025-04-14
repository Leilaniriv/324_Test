function travelNotes(){
    "use strict";

    let noteOutput = document.getElementById('note-output');

    let addNoteBtn = document.getElementById('add-note');

    let inputNote = document.getElementById('input-note');

    let deleteAll = document.getElementById('notes-delete');


    addNoteBtn.addEventListener('click', () => {
        createNote(inputNote, noteOutput);
    });


    inputNote.addEventListener('keypress', (e) => {
        if(e.keypress === 13){
            createNote(inputNote, noteOutput);
        }
    });
        deleteAll.addEventListener('click', () => {
            let notes = noteOutput.querySelectorAll('p');
            if (checkExist(notes) === true) {
                console.log('notes exist...');
                deleteAll.parentNode.style.display = 'none';
                for (let note of notes){
                    note.remove();
                }
            }
    });
}


function createNote(input, output){
    let inputVal = input.value;

    let controls = document.getElementById('app-controls')

    if (inputVal !== ''){
        let p = document.createElement('p');

        p.addEventListener('click', function() {
            console.log('note = ', this);

            let delButton = output.querySelectorAll('.note-delete');
            if (checkExist(delButton) === true) {
                for (let btn of delButton) {
                    btn.style.display = 'none';
                }
            }
            this.querySelector('.note-delete').style.display = 'inline';       
        });

        let delButton = createButton('note-delete', 'delete');


        delButton.addEventListener('click', function(){
            console.log('note delete...', this.parentNode);
            this.parentNode.remove();

            let notes = output.querySelectorAll('p');
            if (checkExist(notes) === false) {
                controls.style.display = 'none';
            }
        });
    

        let noteText = document.createTextNode(inputVal);

        p.appendChild(noteText);

        output.appendChild(p);

        fadeIn(p);
        
        p.append(delButton)

        input.value = '';
    }

    checkVisible(controls);
}

function createButton(btnClass, btnTxt) {
	// create button node
	let btnNode = document.createElement('button');
	// create button text node
	let btnTxtNode = document.createTextNode(btnTxt);
	// set attribute on button node
	btnNode.setAttribute('class', btnClass);
	// append text to button 
	btnNode.appendChild(btnTxtNode);
	// return new button node with text and attribute...
	return btnNode;
}



function checkVisible(node) {
	console.log(node);
	// check passed node's current visibility
	if (node.style.display != 'block') {
		// show in DOM to allow fadeIn...
		node.style.display = 'block';
		// call fadeIn for node in DOM
		fadeIn(node);
	}
}


function checkExist(node) {
	if (node.length) {
        return true;
    } else {
        return false;
  }
}

function fadeIn(node) {
    node.style.opacity = 0;
  
    let last = +new Date();
    let tick = () => {
      node.style.opacity = +node.style.opacity + (new Date() - last) / 1500;
      last = +new Date();
  
      if (+node.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 10);
      }
    };
  
    tick();
  }
  
 travelNotes();
  


       
    

