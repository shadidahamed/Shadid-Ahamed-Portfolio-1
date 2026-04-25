
/* =========================
   AI TOGGLE
========================= */
function toggleAI() {
  const box = document.getElementById("aiBox");
  if (!box) return;

  box.style.display = (box.style.display === "flex") ? "none" : "flex";
}

/* =========================
   VOICE CONTROL
========================= */
let voiceEnabled = true;

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
}

/* =========================
   SPEECH ENGINE
========================= */
function speak(text) {
  if (!voiceEnabled) return;
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel(); // stop previous speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
}

/* =========================
   AI INPUT HANDLER
========================= */
function handleAI(e) {
  if (e.key !== "Enter") return;

  const input = document.getElementById("aiInput");
  const chat = document.getElementById("aiMessages");

  if (!input || !chat) return;

  const msg = input.value.trim();
  if (msg === "") return;

  const lower = msg.toLowerCase();

  appendMessage("You", msg);

  const reply = generateReply(lower);

  appendTypingReply(reply, chat);
  speak(reply);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

/* =========================
   RESPONSE ENGINE
========================= */
function generateReply(msg) {
  if (msg.includes("hire") || msg.includes("job")) {
    return "You can contact me via Email or WhatsApp in the Contact section for hiring opportunities.";
  }

  if (msg.includes("skill")) {
    return "I work with HTML, CSS, JavaScript, UI Design and Problem Solving.";
  }

  if (msg.includes("project")) {
    return "Check the Projects section to see my live work and case studies.";
  }

  if (msg.includes("contact")) {
    return "All contact links are available in the Contact section of this portfolio.";
  }

  return "I can help you with skills, projects, contact or hiring information.";
}

/* =========================
   CHAT UI
========================= */
function appendMessage(sender, text) {
  const chat = document.getElementById("aiMessages");
  if (!chat) return;

  const msg = document.createElement("p");
  msg.innerHTML = `<b>${sender}:</b> ${escapeHTML(text)}`;
  chat.appendChild(msg);
}

/* typing effect */
function appendTypingReply(text, chat) {
  const el = document.createElement("p");
  el.innerHTML = "<b>AI:</b> ";
  chat.appendChild(el);

  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(type, 15);
    }
  }

  type();
}

/* =========================
   QUICK ACTIONS
========================= */
function quickAsk(type) {
  const input = document.getElementById("aiInput");
  if (!input) return;

  const map = {
    hire: "hire",
    skills: "skills",
    project: "project",
    contact: "contact"
  };

  input.value = map[type] || "";
  input.focus();
}

/* =========================
   SECURITY
========================= */
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* =========================
   LIGHTBOX (SKILLS IMAGES)
========================= */
function openImage(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  document.body.style.overflow = "hidden";
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "auto";
}
