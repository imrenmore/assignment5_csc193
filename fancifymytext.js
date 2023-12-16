
function showAlert() {
    alert("hello world");
}

function getBigger() {
    alert("Getting bigger");
    document.getElementById("myText").style.fontSize = "24pt";
}

function getMoo(){
    alert("Getting Moo'd");
    document.getElementById("myText").value = document.getElementById("myText").value.toUpperCase();
    let str = document.getElementById("myText").value.split(".");
    let str2 = str.join("-Moo");
    document.getElementById("myText").value = str2;
}

function changeFancytext() {
    alert("Applying fancy stuff");
    document.getElementById("myText").style.fontWeight = "bold";
    document.getElementById("myText").style.color = "blue";
    document.getElementById("myText").style.textDecoration = "underline";
}

function changeBoringtext() {
    alert("Switching to normal");
    document.getElementById("myText").style.fontWeight = "normal";
    document.getElementById("myText").style.color = "initial";
    document.getElementById("myText").style.textDecoration = "none";
}

