function fontToggle() {
    let original = document.body.style.fontFamily;
    document.body.style.fontFamily = document.getElementById("fontButton").style.fontFamily;
    document.getElementById("fontButton").style.fontFamily = original;
}