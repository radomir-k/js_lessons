
let editButon = document.querySelector(".edit_btn");
// On/Off edit mode
let flag = false;
    editButon.onclick = function(event) {
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

