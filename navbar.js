class CustomNavbar extends HTMLElement {
  connectedCallback() {
    // Prevent double mounting
    if (this.shadowRoot) return;

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background: rgba(10, 10, 10, 0.9);
          border-bottom: 1px solid rgba(34, 211, 238, 0.15);
        }

        .nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'JetBrains Mono', monospace;
        }

        .logo {
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          background: linear-gradient(90deg, #22d3ee, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .links {
          display: flex;
          gap: 2rem;
        }

        .links a {
          color: #a1a1aa;
          text-decoration: none;
          font-size: 0.95rem;
          position: relative;
        }

        .links a:hover {
          color: #e5e4e2;
        }

        .links a::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #22d3ee, #06b6d4);
          transition: width 0.3s ease;
        }

        .links a:hover::after {
          width: 100%;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .links {
            display: none;
          }

          .menu-btn {
            display: block;
          }
        }
      </style>

      <nav class="nav">
        <a href="#hero" class="logo">mohammed@system:~$</a>

        <div class="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <button class="menu-btn" aria-label="Menu">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;

    // Feather icons MUST be replaced inside shadowRoot
    if (window.feather) {
      feather.replace({ root: this.shadowRoot });
    }
  }
}

// Safe custom element definition
if (!customElements.get("custom-navbar")) {
  customElements.define("custom-navbar", CustomNavbar);
}
