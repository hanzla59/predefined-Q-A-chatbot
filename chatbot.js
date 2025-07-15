// const chatBox = document.getElementById("chat-box");
// const userInput = document.getElementById("user-input");
// const sendBtn = document.getElementById("send-btn");

// const botFlow = {
//   start: {
//     message: "Welcome to 🚗 Cars Rental 24/7!\nWe offer reliable car rentals in Islamabad.\nHow can I assist you today?",
//     options: [
//       { label: "📋 View Car Prices", next: "carPrices" },
//       { label: "📦 Services Offered", next: "services" },
//       { label: "📝 Rental Policies", next: "policies" },
//       { label: "❓ FAQs", next: "faqs" }
//     ]
//   },
//   carPrices: {
//     message: "Here are some popular car prices:\n- Honda Civic (2022): ₨13,000\n- Toyota Prado: ₨24,000\n- Audi A6: ₨55,000\n- Fortuner: ₨23,000\n- Altis: ₨8,000–9,000",
//     options: [
//       { label: "📞 Contact & Booking", next: "contact" },
//       { label: "🔙 Go Back", next: "start" }
//     ]
//   },
//   services: {
//     message: "✅ Services We Offer:\n- Self-Drive & Chauffeur\n- Airport Pickup (₨3,000)\n- Hotel/Home Delivery\n- Vans & Buses for groups",
//     options: [
//       { label: "📞 Contact & Booking", next: "contact" },
//       { label: "🔙 Go Back", next: "start" }
//     ]
//   },
//   policies: {
//     message: "📄 Rental Policy:\n- CNIC/Passport/License Required\n- 10% Advance\n- Refundable Deposit or Guarantor\n- Payment on Delivery\n- Renter responsible for damage",
//     options: [
//       { label: "📞 Contact & Booking", next: "contact" },
//       { label: "🔙 Go Back", next: "start" }
//     ]
//   },
//   faqs: {
//     message: "❓ FAQs:\n- Rent without driver? ✔️ Yes\n- Airport delivery? ✔️ Yes (₨3,000)\n- Foreign license? ✔️ Accepted\n- Deposit? ✔️ Usually required",
//     options: [
//       { label: "📞 Contact & Booking", next: "contact" },
//       { label: "🔙 Go Back", next: "start" }
//     ]
//   },
//   contact: {
//     message: "📍 Contact Info:\n📱 +92 314 5324476\n📧 info@carsrental247.com\n🌐 www.carsrental247.com",
//     options: [
//       { label: "🔙 Go Back", next: "start" }
//     ]
//   }
// };

// // Chat render functions
// function addMessage(text, sender = "bot") {
//   const bubble = document.createElement("div");
//   bubble.className = `chat-bubble ${sender}`;
//   bubble.textContent = text;
//   chatBox.appendChild(bubble);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// function showOptions(options) {
//   const btnContainer = document.createElement("div");
//   options.forEach(opt => {
//     const btn = document.createElement("button");
//     btn.className = "option-btn";
//     btn.textContent = opt.label;
//     btn.onclick = () => {
//       addMessage(opt.label, "user");
//       setTimeout(() => runBotStep(opt.next), 300);
//       btnContainer.remove();
//     };
//     btnContainer.appendChild(btn);
//   });
//   chatBox.appendChild(btnContainer);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Start chatbot
// function runBotStep(stepKey) {
//   const step = botFlow[stepKey];
//   addMessage(step.message, "bot");
//   if (step.options) {
//     showOptions(step.options);
//   }
// }

// // Handle user greetings
// function handleUserInput() {
//   const text = userInput.value.trim().toLowerCase();
//   if (!text) return;

//   addMessage(userInput.value, "user");
//   userInput.value = "";

//   if (["hi", "hello", "hey", "salam", "assalamualaikum"].some(greet => text.includes(greet))) {
//     setTimeout(() => runBotStep("start"), 300);
//   } else {
//     addMessage("🤖 Please choose from the available options after greeting me first (say Hi 👋)", "bot");
//   }
// }

// sendBtn.onclick = handleUserInput;
// userInput.addEventListener("keypress", e => {
//   if (e.key === "Enter") handleUserInput();
// });



const chatContainer = document.getElementById("chat-content");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const botFlow = {
  start: {
    message: "👋 Welcome to 🚗 Cars Rental 24/7!\nHow can I assist you?",
    options: [
      { label: "📋 View Car Prices", next: "carPrices" },
      { label: "📦 Services Offered", next: "services" },
      { label: "📝 Rental Policies", next: "policies" },
      { label: "❓ FAQs", next: "faqs" }
    ]
  },
  carPrices: {
    message: "💰 Car Prices:\n- Honda Civic: ₨13,000\n- Prado: ₨24,000\n- Audi A6: ₨55,000\n- Altis: ₨8,000–9,000",
    options: [
      { label: "📞 Contact", next: "contact" },
      { label: "🔙 Go Back", next: "start" }
    ]
  },
  services: {
    message: "🧰 Services:\n- Self-drive or with driver\n- Airport Delivery: ₨3,000\n- Vans/Buses available",
    options: [
      { label: "📞 Contact", next: "contact" },
      { label: "🔙 Go Back", next: "start" }
    ]
  },
  policies: {
    message: "📄 Rental Policy:\n- CNIC/Passport/License needed\n- 10% Advance\n- Deposit or guarantor\n- Renter pays for damage",
    options: [
      { label: "📞 Contact", next: "contact" },
      { label: "🔙 Go Back", next: "start" }
    ]
  },
  faqs: {
    message: "🤔 FAQs:\n- Rent w/o driver? ✔️ Yes\n- Foreign license? ✔️ Accepted\n- Deposit? ✔️ Usually required",
    options: [
      { label: "📞 Contact", next: "contact" },
      { label: "🔙 Go Back", next: "start" }
    ]
  },
  contact: {
    message: "📍 Contact Info:\n📱 +92 314 5324476\n📧 info@carsrental247.com\n🌐 www.carsrental247.com",
    options: [
      { label: "🔙 Go Back", next: "start" }
    ]
  }
};

function addMessage(text, sender = "bot") {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = text;
  chatContainer.appendChild(bubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showOptions(options) {
  const btnContainer = document.createElement("div");
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.label;
    btn.onclick = () => {
      addMessage(opt.label, "user");
      setTimeout(() => runBotStep(opt.next), 300);
      btnContainer.remove();
    };
    btnContainer.appendChild(btn);
  });
  chatContainer.appendChild(btnContainer);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function runBotStep(stepKey) {
  const step = botFlow[stepKey];
  addMessage(step.message, "bot");
  if (step.options) showOptions(step.options);
}

// Greeting handler
function handleUserInput() {
  const text = userInput.value.trim().toLowerCase();
  if (!text) return;

  addMessage(userInput.value, "user");
  userInput.value = "";

  if (["hi", "hello", "hey", "salam", "assalamualaikum"].some(g => text.includes(g))) {
    setTimeout(() => runBotStep("start"), 300);
  } else {
    addMessage("🤖 Please say 'hi' to start or choose from options.", "bot");
  }
}

sendBtn.onclick = handleUserInput;
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleUserInput();
});
