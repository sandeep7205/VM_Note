let count = 0;
//  creates new note
 function addNote() {  
  count++;
  //container
  let note = document.createElement("div");
  note.onmousedown = selectNote;
  note.ontouchstart = selectNote;
  note.className = "note";
  //option button
   let button = document.createElement("img");
   button.src = "3-vertical-dots.svg";
   button.className = "option-button";
  button.textContent = ":";
  button.onmousedown = noteMenu;
  button.ontouchstart = noteMenu;
  note.appendChild(button);
  //note title
  let title = document.createElement("textarea");
  title.placeholder = "Enter Title";
  title.className = "title";
  note.appendChild(title);
  //note description
  let desc = document.createElement("textarea");
  desc.placeholder = "Enter Note";
  desc.className = "content";
  note.appendChild(desc);

  note.id = "note" + count;
  document.body.appendChild(note); //Add the note
}


let select = null;
//select note
function selectNote() { 
  select = this;
}
function snapNote(event) {
  if (select !== null) {
    let notes = document.getElementsByClassName("note"); // Get the notes
  } 
}


//dropdown menu
function noteMenu() {
  let menus = document.getElementsByClassName("menu"); // Get all menus
  let thisNoteHasMenu =
    this.parentNode.getElementsByClassName("menu").length !== 0; //Whether this particular note has an active menu
  for (let i = 0; i < menus.length; i++) {
    menus[i].remove();
  }
  let noteMenu = document.createElement("div");
   noteMenu.textContent = "Change Background";
  noteMenu.className = "menu";
  //note colors
  let colors = [
    "#FFFFFF",
    "#CBD2D6",
    "#CCE8E4",
    "#FAF1DB",
    "#FDE9D9",
    "#F9DCD5",
  ];

  // color buttons
  colors.forEach((color) => {
    let colorOption = document.createElement("button");
    colorOption.className = "color-option";
    colorOption.style.backgroundColor = color;
    colorOption.onmousedown = setColor;
    colorOption.ontouchstart = setColor;
    noteMenu.appendChild(colorOption);
  });

  // delete button
  let deleteButton = document.createElement("div");
  deleteButton.className = "delete-note";
  deleteButton.onmousedown = () => {
    setTimeout(deleteNote.bind(deleteButton), 155);
  }; 
  let deleteText = document.createElement("p");
  deleteText.textContent = "Delete";
  deleteText.className = "delete-text";
  deleteButton.appendChild(deleteText);
  noteMenu.appendChild(deleteButton);
  this.parentNode.appendChild(noteMenu); 
}

  //sets the color of a note
function setColor() {
  let note = this.parentNode.parentNode;
  let newColor = this.style.backgroundColor;
  note.style.backgroundColor = newColor;
  note.children[1].style.backgroundColor = newColor;
  note.children[2].style.backgroundColor = newColor;
}

document.onmousedown = clearMenus; //Clear menus when the mouse is clicked to the side
function clearMenus(event) {
  let menu = document.getElementsByClassName("menu"); // Get all menus
  for (let i = 0; i < menu.length; i++) {
    // Loop through the menus
    let rect = menu[i].getBoundingClientRect(); // bounding rectangle to know the position
    //  remove If the mouse is not above the menu
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      if (menu[i].id == "active") {
        menu[i].remove();
      } else {
        menu[i].id = "active";
      }
    }
  }
}

 //deletes a note 
function deleteNote() {
  let thisNote = this.parentNode.parentNode;
  let notes = document.getElementsByClassName("note");
  thisNote.remove();
}

