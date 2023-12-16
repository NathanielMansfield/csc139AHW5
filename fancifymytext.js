

function hWorld() {
    alert("Hello, world!");
}

function setTASize() {
    //    alert("Hello, world!");
    //document.getElementById("elementID").style.propertyName = "value";
    document.getElementById("tArea").style.fontSize = "24pt";
}

function fancyHandler() {
    document.getElementById("tArea").style.fontWeight = "bold";
    document.getElementById("tArea").style.color = "blue";
    document.getElementById("tArea").style.textDecoration = "underline";
}

function boringHandler() {
    document.getElementById("tArea").style.fontWeight = "normal";
    document.getElementById("tArea").style.color = "black";
    document.getElementById("tArea").style.textDecoration = "none";
}

function moo() {
    document.getElementById("tArea").style.textTransform = "uppercase";
    var str = "How are you?";
    var parts = document.getElementById("tArea").value.split(".");  // ["How", "are", "you?"]
    str = parts.join("-Moo.");       // "How_are_you?"
    document.getElementById("tArea").value = parts.join("-Moo.");
//    textArea.value = str;
}