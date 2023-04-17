document.addEventListener("DOMContentLoaded", function() {
	var modal = document.querySelector(".modal");
	var closeModal = document.querySelector(".close-modal");
	modal.style.display = "block";
	closeModal.addEventListener("click", function() {
		modal.style.display = "none";
	});
});

document.addEventListener("DOMContentLoaded", function() {
	var chatButton = document.querySelector(".chat-button");
	var chatWindow = document.querySelector(".chat-window");
	var closeChat = document.querySelector(".close-chat");
	var chatInput = document.querySelector(".chat-footer input[type='text']");
	var chatBody = document.querySelector(".chat-body");
	var sendMessage = document.querySelector(".send-message");

	chatButton.addEventListener("click", function() {
		chatWindow.style.display = "block";
	});

	closeChat.addEventListener("click", function() {
		chatWindow.style.display = "none";
	});

	sendMessage.addEventListener("click", function() {
		if (chatInput.value.trim() !== "") {
			var message = document.createElement("p");
			message.textContent = chatInput.value;
			chatBody.appendChild(message);
			chatInput.value = "";
		}
	});
});

var myItem = document.querySelector('#my-item');

