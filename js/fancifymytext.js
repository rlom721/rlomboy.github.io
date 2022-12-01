function showWelcomeMessage() {
    document.getElementById("Text").style.fontSize = "4em";
}

function fancifyText() {
    if (document.getElementById("fs").checked) {
        document.getElementById("Text").style.fontWeight = "bold";
        document.getElementById("Text").style.color = "blue";
        document.getElementById("Text").style.textDecoration = "underline";
    }
} 

function unfancifyText() {
    document.getElementById("Text").style = "initial";
} 

function mooText() {
    let uppercaseText = document.getElementById("Text").value.toUpperCase();
    let suffix = "-Moo";
    
    if (document.getElementById("moo").checked) {
        document.getElementById("Text").value = uppercaseText;
    }

    let sentences = uppercaseText.split(".").filter(element => element);

    for (let i = 0; i < sentences.length; i++) {
        sentences[i] += suffix;
    }
    
    document.getElementById("Text").value = sentences.join(" ");
} 