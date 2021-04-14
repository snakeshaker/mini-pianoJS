document.addEventListener("keydown", function (event) {
    let audio;
    if (event.code == "KeyA") {
        audio = new Audio("keys/A.mp3");
    } else if (event.code == "KeyS") {
        audio = new Audio("keys/S.mp3");
    } else if (event.code == "KeyD") {
        audio = new Audio("keys/D.mp3");
    } else if (event.code == "KeyF") {
        audio = new Audio("keys/F.mp3");
    } else if (event.code == "KeyG") {
        audio = new Audio("keys/G.mp3");
    } else if (event.code == "KeyH") {
        audio = new Audio("keys/H.mp3");
    } else if (event.code == "KeyJ") {
        audio = new Audio("keys/J.mp3");
    } else if (event.code == "KeyW") {
        audio = new Audio("keys/W.mp3");
    } else if (event.code == "KeyE") {
        audio = new Audio("keys/E.mp3");
    } else if (event.code == "KeyT") {
        audio = new Audio("keys/T.mp3");
    } else if (event.code == "KeyY") {
        audio = new Audio("keys/Y.mp3");
    } else if (event.code == "KeyU") {
        audio = new Audio("keys/U.mp3");
    } else {
        console.log("You pressed wrong key.");
        return;
    }
    audio.play();
});