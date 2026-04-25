function toggleAI() {
  const box = document.getElementById("aiBox");
  if (!box) return;

  const isOpen = box.style.display === "flex";
  box.style.display = isOpen ? "none" : "flex";
}

/* =========================
   MAIN AI HANDLER
========================= */
function handleAI(e) {
  if (e.key !== "Enter") return;

  const input = document.getElementById("aiInput");
  const chat = document.getElementById("aiMessages");

  if (!input || !chat) return;

  const msg = input.value.trim();
  if (msg === "") return;

  const lower = msg.toLowerCase();

  // USER MESSAGE
  appendMessage("You", msg);

  // BOT RESPONSE
  const reply = generateReply(lower);

  appendTypingReply(reply, chat);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

/* =========================
   RESPONSE ENGINE
========================= */
function generateReply(msg) {
  if (msg.includes("hire") || msg.includes("job")) {
    return "You can contact me via Email or WhatsApp in the Contact section for hiring.";
  }

  if (msg.includes("skill")) {
    return "I work with HTML, CSS, JavaScript, UI Design, and Problem Solving.";
  }

  if (msg.includes("project")) {
    return "Check the Projects section for live demos and case studies.";
  }

  if (msg.includes("contact")) {
    return "Scroll to Contact section — all professional links are available there.";
  }

  return "I can help you with skills, projects, contact, or hiring information.";
}

/* =========================
   CHAT UI HELPERS
========================= */
function appendMessage(sender, text) {
  const chat = document.getElementById("aiMessages");
  if (!chat) return;

  const msg = document.createElement("p");
  msg.innerHTML = `<b>${sender}:</b> ${escapeHTML(text)}`;
  chat.appendChild(msg);
}

/* typing effect (clean version) */
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
   QUICK BUTTON SUPPORT
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
   SECURITY CLEANUP (IMPORTANT)
========================= */
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
