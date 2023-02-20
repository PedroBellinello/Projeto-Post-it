
//acesso aos containers da div
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];

//acesso aos incones
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

//função aos incones
xIcon.addEventListener("click", function(){
     typeNote();
})

checkIcon.addEventListener("click", function(){
    createNote();
})

//função escrever nota
function typeNote(){
  if(container3.style.display == "none"){
     container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}



//função criar nota
function createNote(){
    var noteText = document.getElementById("note-text").value;

    var note0 = document.createElement("div");
    var note1 = document.createElement("h1");

    note1.innerHTML = noteText ;

    note1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px gba(0,0,0,0.75)");

    note1.style.margin = margin();
    note1.style.transform = rotate();
    note1.style.background = color();

    note0.appendChild(note1);

    container2.insertAdjacentElement("beforeend", note0);

    note0.addEventListener("mouseenter", function(){
        note0.style.transform = "scale(1.1)";
    })

    note0.addEventListener("mouseleave", function(){
        note0.style.transform = "scale(1)";
    })

    note0.addEventListener("dblclick", function(){
        note0.remove();
    })

    document.getElementById("note-text").value = '';
}

function deleteNote(){
    // Seleciona todos os elementos de nota criados
    var notes = document.querySelectorAll(".container2 div");

    // Remove cada nota do DOM
    notes.forEach(function(note){
        note.remove();
    });
}


// funções para gerar uma nota em cora e posição determinadas abaixo
function margin(){
   var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

   return random_margin[Math.floor(Math.random() * random_margin.length)];
}


function rotate(){
   var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)",];

   return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}


function color(){
   var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328", "#45e124"]

   if(i > random_color.length - 1) {
    i = 0;
   }
   return random_color[i++];
}

