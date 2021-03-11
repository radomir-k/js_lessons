
let editButon = document.querySelector(".edit_btn");
let boldButon = document.querySelector(".btn-bold");
let italicButon = document.querySelector(".btn-italic");
let clearButon = document.querySelector(".btn-clear");
let underlinedButon = document.querySelector(".btn-underlined");
let justifyButon = document.querySelector(".btn-al-justify");
let leftButon = document.querySelector(".btn-al-left");
let centerButon = document.querySelector(".btn-al-center");
let rightButon = document.querySelector(".btn-al-right");

boldButon.onclick = function() {
    document.execCommand('bold', false, null);
}

italicButon.onclick = function() {
    document.execCommand('italic', false, null);
}

underlinedButon.onclick = function() {
    document.execCommand('underline', false, null);
}

leftButon.onclick = function() {
    document.execCommand('justifyLeft', false, null);
}

centerButon.onclick = function() {
    document.execCommand('justifyCenter', false, null);
}

rightButon.onclick = function() {
    document.execCommand('justifyRight', false, null);
}

justifyButon.onclick = function() {
    document.execCommand('justifyFull', false, null);
}

clearButon.onclick = function() {
    document.execCommand('removeFormat', false, null);
}

// On/Off edit mode
let flag = false;
document.querySelector(".editText").contentEditable = flag;
document.querySelector("._mode").hidden = !flag;

editButon.onclick = function() {
    flag = !flag;
    document.querySelector(".editText").contentEditable = flag;
    document.querySelector("._mode").hidden = !flag;
}


let resizeBlock = document.querySelector(".resizeContainer");
let resizeHandle = document.querySelector("._handle").addEventListener("mousedown", initializeResize);

function initializeResize() {
	// Add handlers for during dragging to resize
    mouseMoveHandle = window.addEventListener("mousemove", onMouseMove, false);
    mouseUpHandle = window.addEventListener("mouseup", onMouseUp, false);
}

function onMouseMove(event) {
	// Handle resizing
	resizeBlock.style.width = (event.clientX - resizeBlock.offsetLeft) + "px";
	resizeBlock.style.height = (event.clientY - resizeBlock.offsetTop) + "px";
}

function onMouseUp() {
	// Remove handlers after resize has stopped
    mouseMoveHandle = window.removeEventListener("mousemove", onMouseMove, false);
    mouseUpHandle = window.removeEventListener("mouseup", onMouseUp, false);
}

