let myNodeList = document.getElementsByTagName("LI");
let i;

for (i = 0; i< myNodeList.length; i++){
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
        let div = this.parentElement
        div.style.display = 'none'
    }
}

let list = document.querySelector('ul')
list.addEventListener(
    'click',
    function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked')
        }
    },
    false
)

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }