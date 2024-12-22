const motivationalMessages = [
    "Every step you take, no matter how small, is progress toward your goal. Keep moving forward!",
    "Believe in yourself and all that you are. You are capable of more than you know.",
    "The journey may be tough, but the destination will be worth it. Don’t give up!",
    "Success doesn’t come from what you do occasionally; it comes from what you do consistently.",
    "When it feels like the world is against you, remember why you started. You’ve got this!",
    "Your potential is endless. Go do what you were created to do!",
    "Great things never come from staying in your comfort zone. Take the leap!",
    "Don’t wait for the perfect moment; take the moment and make it perfect.",
    "You are stronger than you think, braver than you feel, and more capable than you imagine.",
    "Turn your setbacks into comebacks. The best chapters of your story are yet to be written.",
    "Believe in yourself, and you will be unstoppable.",
    "Every day is a chance to grow and improve.",
    "Dream big, work hard, and make it happen.",
    "Success is the sum of small efforts repeated daily.",
    "You are capable of amazing things.",
    "Difficult roads often lead to beautiful destinations.",
    "Don’t stop until you’re proud.",
    "Failure is not the opposite of success; it’s part of the journey.",
    "The best time to start was yesterday. The second-best time is now.",
    "Your potential is endless, so go do what you were created to do.",
    "Turn your dreams into plans and your plans into actions.",
    "Hard work beats talent when talent doesn’t work hard.",
    "It always seems impossible until it’s done.",
    "Small steps every day add up to big achievements.",
    "Mistakes are proof that you’re trying.",
    "Push yourself, because no one else is going to do it for you.",
    "You have the power to create change, so start today.",
    "Stay positive, work hard, and make it happen.",
    "Don’t wait for opportunity. Create it.",
    "Your journey is just as important as your destination."
];

const messageID = document.getElementById('message-area');

const displayMessage = () => {
    var randomNumber = Math.floor(Math.random() * motivationalMessages.length)
    messageID.innerHTML = motivationalMessages[randomNumber];
}

displayMessage();

const copyMessage = () => {

    navigator.clipboard.writeText(messageID.textContent)
    .then(() => {
        alert("Message copied to clipboard!")
    }) .catch (err => {
        alert("Message failed to copy!");
    })
}