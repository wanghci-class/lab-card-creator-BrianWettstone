document.getElementById("preview-btn").addEventListener("click", function(event) {
    var toValue = document.getElementById("to").value;
    var fromValue = document.getElementById("from").value;
    var titleValue = document.getElementById("title").value;
    var subtitleValue = document.getElementById("subtitle").value;
    var messageValue = document.getElementById("message").value;

    document.querySelector(".to-text").textContent = toValue;
    document.querySelector(".from-text").textContent = fromValue;
    document.querySelector(".title-text").textContent = titleValue;
    document.querySelector(".subtitle-text").textContent = subtitleValue;
    document.querySelector(".message-text").textContent = messageValue;
});

document.getElementById("save-btn").addEventListener("click", function(event) {
    // event.preventDefault();

    var cards = localStorage.getItem("cards");
    if (cards === null) {
        cards = [];
    } else {
        cards = JSON.parse(cards);
    }

    var currentCard = {
        to: document.getElementById("to").value,
        from: document.getElementById("from").value,
        title: document.getElementById("title").value,
        subtitle: document.getElementById("subtitle").value,
        message: document.getElementById("message").value
    };

    cards.push(currentCard);
    localStorage.setItem("cards", JSON.stringify(cards));
});