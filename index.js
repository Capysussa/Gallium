let chatBar = document.getElementById("chat-text-input");
let chatMessages = document.getElementById("chat-messages");

function sendMessage(text = "Hello world!", author = "Username", timeAndDate = "date", pfpFile = "basicPFP.png") {
    chatMessages.innerHTML += `
    <div class="chatMessage">
    <img class="chatMessage/pfp" href="${pfpFile}" alt="${author}'s Profile Picture">
    <div class="chatMessage/info">
        <div class="chatMessage/info/author">${author}</div>
        <div class="chatMessage/info/seperator">●</div>
        <div class="chatMessage/info/date">${timeAndDate}</div>
    </div>
    <div class="chatMessage/text">${text}</div>
    </div>
    `;
}

function getTimeAndDateCurrent() {
    let date = new Date();
    let day = date.getDay;
    let month = date.getMonth;
    let year = date.getFullYear;
    let seconds = date.getSeconds;
    let minutes = date.getMinutes;
    let hours = date.getHours;

    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

chatBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage(chatBar.textContent, "Username", getTimeAndDateCurrent(), "");
    }
});