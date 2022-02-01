// console.log(document);

// let text = document.getElementsByTagName('p');
// let text = document.getElementById('p');
// text.innerText= "<b>Sagol p126</b>";

// let text2 = document.getElementsByClassName("text2");
// let text = document.querySelector("#container p");
// let texts = document.querySelectorAll("#container p");
// text.style.color = "red";
// text.style.backgroundColor = "blue";

// for (const item of texts) {
//     item.style.color = "teal";
// }
// console.log(text);
// console.log(texts);

// let sendBtn = document.getElementById ("add-btn");

// sendBtn.onclick = function() {
//     alert("Hello p126");
// }
// sendBtn.onclick = function() {
//     alert("Goodbye p126");
// }


// sendBtn.addEventListener('click', function(){
//     alert("Hellop p126");
// })
// sendBtn.addEventListener('click', function(){
//     alert("Goodbye p126");
// })

let txtInput = document.querySelector(".text-input");
let btn = document.getElementById("add-btn");
let parentli = document.querySelector(".parent-li");

// txtInput.className = "test";
// console.log(txtInput);

// btn.onclick =function(e){
//     if(txtInput.value.trim() != ""){
//         console.log(txtInput.value)
//     }

//     txtInput.value = "";
//     e.preventDefault();
// }

btn.addEventListener("click", function(){
    // if (txtInput.value = "") {
    //     alert("Bosh Buraxmiyin");
    //     return;
    // }

    // if(txtInput.value != ""){

    //     parentli.innerHTML +=`<li class="list-group-item">${txtInput.value}</li>`
    // }

    let li = document.createElement("li");
    let icon = document.createElement("i");
    icon.className = "fas fa-times pt-1";
    icon.style.float = "right";
    li.classList.add("list-group-item");
    li.classList.add("test");
    li.innerText = txtInput.value;
    li.append(icon);
    parentli.append(li);


    icon.onclick = function() {
        li.remove();
    }

    txtInput.value = "";

    // e.preventDefault();
})