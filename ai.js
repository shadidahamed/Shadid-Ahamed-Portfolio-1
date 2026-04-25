/* =========================
   AI ASSISTANT SYSTEM
   ai.js - Professional Version
========================= */

class PortfolioAI {
  constructor() {
    this.aiBox = document.getElementById("aiBox");
    this.aiMessages = document.getElementById("aiMessages");
    this.aiInput = document.getElementById("aiInput");

    this.init();
  }

  init() {
    if (!this.aiBox || !this.aiMessages || !this.aiInput) {
      console.error("AI Assistant elements not found in DOM");
      return;
    }

    this.bindEvents();
    this.addWelcomeMessage();
  }

  bindEvents() {
    // Toggle AI Box
    document.getElementById("aiToggle")?.addEventListener("click", () => this.toggleAI());

    // Handle Enter key
    this.aiInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.handleUserInput();
      }
    });

    // Optional: Click outside to close (better UX)
    this.aiBox.addEventListener("click", (e) => {
      if (e.target === this.aiBox) {
        this.toggleAI();
      }
    });
  }

  toggleAI() {
    if (this.aiBox.style.display === "flex") {
      this.aiBox.style.display = "none";
    } else {
      this.aiBox.style.display = "flex";
      this.aiInput.focus(); // Auto-focus input when opened
    }
  }

  openAI() {
    this.aiBox.style.display = "flex";
    this.aiInput.focus();
  }

  addWelcomeMessage() {
    const welcomeHTML = `
      <div class="ai-message bot">
        👋 Hi! I'm your personal portfolio assistant.<br>
        You can ask me about:
        <strong>skills</strong>, <strong>projects</strong>, <strong>contact</strong>, or <strong>hiring</strong>.
      </div>
    `;

    this.aiMessages.innerHTML = welcomeHTML;
  }

  handleUserInput() {
    const text = this.aiInput.value.trim();
    if (!text) return;

    // Add user message
    this.addMessage("user", text);

    // Clear input
    this.aiInput.value = "";

    // Simulate thinking delay (feels more natural)
    setTimeout(() => {
      const reply = this.generateReply(text.toLowerCase());
      this.addMessage("bot", reply);
    }, 400);

    // Scroll to bottom
    this.scrollToBottom();
  }

  addMessage(type, content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `ai-message ${type}`;

    if (type === "user") {
      messageDiv.innerHTML = `
        <span class="message-label">You</span>
        <span class="message-text">${this.escapeHTML(content)}</span>
      `;
    } else {
      messageDiv.innerHTML = `
        <span class="message-label">AI</span>
        <span class="message-text">${this.escapeHTML(content)}</span>
      `;
    }

    this.aiMessages.appendChild(messageDiv);
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.aiMessages.scrollTop = this.aiMessages.scrollHeight;
  }

  escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  /* ==================== SMART AI RESPONSES ==================== */
  generateReply(msg) {
    // Exact matches first
    if (msg.includes("who are you") || msg.includes("introduce yourself")) {
      return "I'm your intelligent portfolio assistant. I can help you learn more about my skills, projects, experience, and how to get in touch.";
    }

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return "Hey there! 👋 How can I help you today? Feel free to ask about my skills, projects, or hiring.";
    }

    if (msg.includes("how are you")) {
      return "I'm doing great, thanks for asking! Ready to assist you with anything portfolio-related.";
    }

    // Hiring / Job related
    if (msg.includes("hire") || msg.includes("job") || msg.includes("work") || msg.includes("freelance") || msg.includes("collaborate")) {
      return "I'd love to work with you! You can reach out directly via Email or WhatsApp from the Contact section. Looking forward to hearing from you!";
    }

    // Skills
    if (msg.includes("skill") || msg.includes("technology") || msg.includes("stack") || msg.includes("what do you know")) {
      return "I specialize in:\n• HTML5, CSS3, Tailwind/Bootstrap\n• JavaScript (ES6+), React\n• Responsive & Modern UI/UX Design\n• Performance optimization & clean code";
    }

    // Projects
    if (msg.includes("project") || msg.includes("work") || msg.includes("demo") || msg.includes("portfolio")) {
      return "Check out the **Projects** section above! Each project has live demos, screenshots, and tech details. Let me know if you want more info about any specific one.";
    }

    // Contact
    if (msg.includes("contact") || msg.includes("email") || msg.includes("whatsapp") || msg.includes("phone")) {
      return "You can find all my contact details (Email, WhatsApp, LinkedIn, etc.) in the **Contact** section at the bottom of the page.";
    }

    if (msg.includes("thank") || msg.includes("thanks")) {
      return "You're very welcome! Glad I could help 😊";
    }

    if (msg.includes("bye") || msg.includes("goodbye")) {
      return "Goodbye! Feel free to come back anytime. Have a great day!";
    }

    // Fallback with smart suggestion
    return "I'm not sure about that one, but I can definitely help with my **skills**, **projects**, **contact info**, or **hiring opportunities**. What would you like to know?";
  }
}

// Initialize AI when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.portfolioAI = new PortfolioAI();
});

// Make functions globally available if you still call them from HTML
window.toggleAI = () => window.portfolioAI?.toggleAI();
window.openAI = () => window.portfolioAI?.openAI();