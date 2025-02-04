const form = document.querySelector("form");
const message = document.getElementById("message");
const chats = document.getElementById("chats");

const responses = {
  hey: "Halo!",
  halo: "Halo! Ada yang bisa saya bantu?",
  "apa kabar?":
    "Saya hanya bot, tapi saya baik-baik saja! Bagaimana denganmu?",
  "apa kabar":
    "Saya hanya bot, tapi saya baik-baik saja! Bagaimana denganmu?",
  "siapa namamu?": "Saya adalah chatbot siap membantumu!",
  "selamat pagi": "Selamat pagi! Semoga harimu menyenangkan!",
  "selamat malam": "Selamat malam! Jangan lupa istirahat ya.",
  "terima kasih": "Sama-sama! Ada lagi yang bisa saya bantu?",
  bye: "Sampai jumpa! Semoga harimu menyenangkan!",
  "apa yang bisa kamu lakukan":
    "Saya bisa menjawab pertanyaan-pertanyaan sederhana. Coba tanyakan sesuatu!",
  "berapa 2 tambah 2": "Jawabannya adalah 4.",
  "apa warna langit":
    "Langit biasanya berwarna biru, kecuali saat mendung atau malam hari.",
  "kamu suka apa": "Saya suka membantu orang seperti kamu!",
  "apa makanan favoritmu":
    "Saya tidak makan, tapi saya suka mendengar tentang makanan favoritmu!",
  "ceritakan lelucon":
    "Tentu! Kenapa ayam menyeberang jalan? Karena dia ingin ke sisi lain!",
  "kamu tinggal di mana":
    "Saya tinggal di dunia digital, tepat di dalam perangkatmu.",
  "hobi kamu apa":
    "Hobi saya adalah menjawab pertanyaan dan membantu orang.",
  "siapa presiden indonesia":
    "Presiden Indonesia saat ini adalah Joko Widodo (jika tidak ada perubahan).",
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendMessage();
});

function sendMessage() {
  const userMessage = message.value.trim().toLowerCase();

  if (userMessage) {
    addChatBubble(userMessage, "user");

    const botResponse =
      responses[userMessage] ||
      "Maaf, saya tidak mengerti. Coba tanyakan yang lain.";
    setTimeout(() => addChatBubble(botResponse, "bot"), 500);

    message.value = "";
  }
}

function addChatBubble(text, sender) {
  const listItem = document.createElement("li");
  listItem.classList.add("chat-bubble", sender);
  listItem.innerText = text;
  chats.appendChild(listItem);

  chats.scrollTop = chats.scrollHeight;
}