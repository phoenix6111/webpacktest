function generateText() {
    var element = document.getElementById("h2");
    element.innerHTML = "Hello h2 world!";
    return element;
}

module.exports = generateText;