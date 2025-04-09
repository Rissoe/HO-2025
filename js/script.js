function fontToggle() {
    let original = document.body.style.fontFamily;
    document.body.style.fontFamily = document.getElementById("fontButton").style.fontFamily;
    document.getElementById("fontButton").style.fontFamily = original;
}

function Formify() {
    let score = 0
    let value = document.forms["QuestionArticle"]["Q1"].value;
    if (value == "right") { score++ };
    value = document.forms["QuestionArticle"]["Q2"].value;
    if (value == "right") { score++ };
    value = document.forms["QuestionArticle"]["Q3"].value;
    if (value == "right") { score++ };
    value = document.forms["QuestionArticle"]["Q4"].value;
    if (value == "right") { score++ };
    value = document.forms["QuestionArticle"]["Q5"].value;
    if (value == "right") { score++ };
    alert(score+"/5 change to a message on the page later")
}