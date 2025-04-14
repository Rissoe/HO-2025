function fontToggle() {
    let original = document.body.style.fontFamily;
    document.body.style.fontFamily = document.getElementById("fontButton").style.fontFamily;
    document.getElementById("fontButton").style.fontFamily = original;
}

function Formify() {
    let score = 0
    let message = ""
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

    if (score == 0) { message = "Heb je zelfs dingen ingevuld?" }
    else if (score == 1) { message = "Dat kan beter." }
    else if (score == 2) { message = "Net niet goed genoeg!" }
    else if (score == 3) { message = "Wel minstens is het over de helft?"}
    else if (score == 4) { message = "Dat is een goede score!" }
    else { message = "Goed gedaan!" }
    event.preventDefault()
    alert(score+"/5\n"+message)
    location.replace("../article.html")
}