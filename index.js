let chatBar = document.getElementById("chat-text-input");
let chatMessages = document.getElementById("chat-messages");

function sendMessage(text = "Hello world!", author = "Username", timeAndDate = "date", pfpFile = "basicPFP.png") {
    chatMessages.innerHTML += `
    <div class="chatMessage">
    <img class="chatMessage_pfp" src="${pfpFile}" alt="${author}'s Profile Picture">
    <div class="chatMessage_info">
        <span class="chatMessage_info_author">${author}</span>
        <span class="chatMessage_info_seperator">●</span>
        <span class="chatMessage_info_date">${timeAndDate}</span>
    </div>
    <div class="chatMessage_text">${text}</div>
    </div>
    `;
}

function getTimeAndDateCurrent() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

chatBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage(chatBar.textContent, "67", getTimeAndDateCurrent(), "STANDARD_PFPS\\Gallium_Standard_PFP.png");
    }
});