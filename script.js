function shootConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
function hideMessage() {
    document.getElementById('message-popup').style.display = 'none';
}
function showMessage(element, message) {
    
    document.querySelectorAll('.envelope').forEach(env => env.classList.remove('clicked'));

    element.classList.add('clicked');

    const bubble = element.querySelector('.bubble');
    bubble.textContent = message;

    shootConfetti();
}

function toggleMessage(id) {
    const message = document.getElementById(id);
    const envelope = message.parentElement;

    // Toggle the visibility of the message
    if (message.style.display === "block") {
        message.style.display = "none";
        envelope.classList.remove('show');
    } else {
        // Hide other messages
        document.querySelectorAll('.hidden-message').forEach(msg => {
            msg.style.display = 'none';
            msg.parentElement.classList.remove('show');
        });

        message.style.display = "block";
        envelope.classList.add('show');
    }
}
