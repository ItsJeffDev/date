const questions = [
  "Will you go on a coffee date with me? ☕💞",
  "Would you like to go for a sunset walk? 🌅🚶‍♀️",
  "Do you want ice cream today? 🍦👀",
  "Can we cuddle and watch a movie? 🎥🐻",
  "Will you be my forever date? 💍🥹",
  "Can I give you 100 kisses today? 😘💯",
  "Do you want flowers and chocolates? 🌹🍫",
  "Will you say yes to all my silly questions? 😜❤️"
];

const responsesYes = [
  "Yay! You're the sweetest! 🥰",
  "Omg yes! Get ready! 💃",
  "That makes me so happy 😭💓",
  "You’re the best, Liezel! 💌",
  "Cutest yes ever 😘"
];

const responsesNo = [
  "Awww 😭 Maybe later?",
  "Ouch! My heart 💔😂",
  "You’re teasing me huh? 🙃",
  "Still love you 💗",
  "Let me try again 🤭"
];

const memesYes = [
  "https://media.giphy.com/media/26FPqut4Wv0CbrSzm/giphy.gif",
  "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
  "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif"
];

const memesNo = [
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
  "https://media.giphy.com/media/j2mYzTuKXQG5g/giphy.gif"
];

let currentQuestion = 0;

const questionText = document.getElementById('questionText');
const response = document.getElementById('response');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Start with the first question
questionText.textContent = questions[currentQuestion];

yesBtn.onclick = () => {
  handleAnswer(true);
};

noBtn.onclick = () => {
  handleAnswer(false);
};

function handleAnswer(isYes) {
  const resText = isYes
    ? getRandom(responsesYes)
    : getRandom(responsesNo);

  const meme = isYes
    ? getRandom(memesYes)
    : getRandom(memesNo);

  response.innerHTML = `
    <div>${resText}</div>
    <img src="${meme}" alt="meme response" />
  `;

  // Save response
  saveResponse(questions[currentQuestion], isYes ? "Yes" : "No");

  // Move to next question
  currentQuestion++;

  // Delay before showing next question
  setTimeout(() => {
    if (currentQuestion < questions.length) {
      questionText.textContent = questions[currentQuestion];
      response.innerHTML = "";
    } else {
      questionText.textContent = "You're the cutest Liezel! 💕 The end 🥰";
      document.querySelector('.buttons').style.display = 'none';
    }
  }, 3000);
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function saveResponse(question, answer) {
  console.log(`Saved: ${question} => ${answer}`);
  // Add your backend API call here if needed
}
