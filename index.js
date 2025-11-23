let chatBar = document.getElementById("chat-text-input");

chatBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});