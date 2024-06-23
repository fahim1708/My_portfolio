window.onload = function() {
    // Array of fortunes
    const fortunes = [
        "True wisdom comes not from knowledge, but from understanding.",
        "You will find great success in the near future.",
        "Happiness is a journey, not a destination.",
        "The best way to predict the future is to create it.",
        "Every day is a new opportunity to make a positive change.",
        "Believe in yourself and all that you are.",
        "Success is not the key to happiness. Happiness is the key to success."
    ];

    // Function to get a random fortune
    function getRandomFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }

    // Display the fortune
    const fortuneBox = document.getElementById('fortuneBox');
    fortuneBox.innerHTML = `<p>${getRandomFortune()}</p>`;
};