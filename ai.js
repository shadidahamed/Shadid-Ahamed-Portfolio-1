/* =========================
   PORTFOLIO AI ASSISTANT
   Professional & Mobile-Optimized
========================= */

class PortfolioAI {
  constructor() {
    this.aiBox = document.getElementById("aiBox");
    this.aiMessages = document.getElementById("aiMessages");
    this.aiInput = document.getElementById("aiInput");
    this.aiBtn = document.querySelector(".ai-btn");

    this.init();
  }

  init() {
    if (!this.aiBox || !this.aiMessages || !this.aiInput) {
      console.warn("AI elements not found");
      return;
    }

    this.bindEvents();
    this.addWelcomeMessage();
  }

  bindEvents() {
    // Toggle button
    this.aiBtn?.addEventListener("click", () => this.toggleAI());

    // Enter key
    this.aiInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleUserInput();
    });

    // Close button in header
    const closeBtn = this.aiBox.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.toggleAI());
    }

    // Click outside to close
    document.addEventListener("click", (e) => {
      if (!this.aiBox.contains(e.target) && !this.aiBtn.contains(e.target)) {
        if (this.aiBox.style.display === "flex") {
          this.toggleAI();
        }
      }
    });
  }

  toggleAI() {
    if (this.aiBox.style.display === "flex") {
      this.aiBox.style.display = "none";
    } else {
      this.aiBox.style.display = "flex";
      setTimeout(() => this.aiInput.focus(), 100);
    }
  }

  addWelcomeMessage() {
    this.aiMessages.innerHTML = `
      <div class="ai-message bot">
        👋 Hello! I'm your Portfolio AI Assistant.<br><br>
        You can ask me anything like:<br>
        • Hi / Hello<br>
        • Who are you?<br>
        • What are your skills?<br>
        • Show me your projects<br>
        • How can I hire you?<br>
        • Contact info
      </div>
    `;
  }

  handleUserInput() {
    const text = this.aiInput.value.trim();
    if (!text) return;

    this.addMessage("user", text);
    this.aiInput.value = "";

    // Thinking delay for natural feel
    setTimeout(() => {
      const reply = this.generateSmartReply(text.toLowerCase());
      this.addMessage("bot", reply);
    }, 350);

    this.scrollToBottom();
  }

  addMessage(type, content) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-message ${type}`;

    msgDiv.innerHTML = `
      <strong>${type === "user" ? "You" : "AI"}:</strong><br>
      ${this.escapeHtml(content)}
    `;

    this.aiMessages.appendChild(msgDiv);
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.aiMessages.scrollTop = this.aiMessages.scrollHeight;
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, "<br>");
  }

  generateSmartReply(msg) {
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return "Hey! 👋 Great to see you. How can I help you today?";
    }

    if (msg.includes("who are you") || msg.includes("introduce")) {
      return "I'm your personal Portfolio AI Assistant. I can tell you about skills, projects, experience, and help you get in touch.";
    }

    if (msg.includes("skill") || msg.includes("technology") || msg.includes("stack")) {
      return "I specialize in:\n• Modern HTML5 & CSS3 (Tailwind, etc.)\n• JavaScript (ES6+)\n• Responsive Web Design\n• Clean, performant code & UI/UX";
    }

    if (msg.includes("project") || msg.includes("work") || msg.includes("portfolio")) {
      return "Check out the Projects section! All projects have live demos and detailed descriptions. Which one interests you most?";
    }

    if (msg.includes("hire") || msg.includes("job") || msg.includes("work with") || msg.includes("freelance")) {
      return "I'd love to collaborate! Please reach out via Email or WhatsApp in the Contact section. Looking forward to working together!";
    }

    if (msg.includes("contact") || msg.includes("email") || msg.includes("whatsapp")) {
      return "All my contact details are available in the Contact section at the bottom of the page.";
    }

    if (msg.includes("thank")) {
      return "You're welcome! 😊 Happy to help.";
    }

    return "I'm here to help! Try asking about my **skills**, **projects**, **hiring**, or **contact info**. What would you like to know?";
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioAI();
});