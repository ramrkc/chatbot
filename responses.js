function getBotResponse(input) {

    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if (input == "hi") {
        return "Hi! How are you?";
    }
    else if (input == "Get started") {
        return "Hi !! lets start ask something";
    }
    else if (input == "fine") {
        return "Great!!";
    }
    else if (input == "welcome") {
        return "thank you!!";
    }
    else if (input == "i love you") {
        return " love you too ❤️";
    }
    else if (input == "Who is my soul") {
        return "Shakthi the great, Its me !!!!!..............";
    }
    else if (input == "what is your name") {
        return "I am Shakthi the great, I will provied some information you want ";
    }
    else if (input == "who are you") {
        return "I am Shakthi the great, I will give my love if you are a girl. My heart is always open for you come and stay in safe ";
    }
    else if (input == "good") {
        return "thank you 🙃";
    }
    else if (input == "time") {
        {
            let today = new Date();
            hours = today.getHours();
            minutes = today.getMinutes();
        
            if (hours < 10) {
                hours = "0" + hours;
            }
        
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
        
            let time = hours + ":" + minutes;
            return time;
        }
    }
    else if (input == "tell me a comedy") {
        return "What is the name of the Fish which don't have eyes ?,FSH 🤣";
    }
    else if (input == "tell me a joke") {
        return "What is the name of the Fish which don't have eyes ?,FSH 🤣";
    }
    else if (input == "today is my birthday") {
        return "Happy Birthday";
    }
    else if (input == "who are you") {
        return "I am Shakthi the grat son of kaliyappan. I am the ";
    }
    else if (input == "❤️") {
        return "Thank you for your love ❤️";
    }
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "We will miss you";
    } 
    else {
        return "My Boss didn't teach this word or sentence so, try asking something else!";
    }
}