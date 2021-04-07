var btnEntrar = document.getElementById("btnEntrar");
var chatMsg = document.getElementById("chatBox");
var btnChat = document.getElementById("chat");

btnEntrar.addEventListener("click", () => {
    alert("Aeeeee, ti fofo!");
})

btnChat.addEventListener("click", () => {

    if (chatMsg.style.display == "none") {
        chatMsg.style.display = "flex";
    } else {
        chatMsg.style.display = "none";
    }

})
