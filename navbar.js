document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  if (!navbar) {
    console.error("Navbar container not found");
    return;
  }

  navbar.innerHTML = `
    <style>
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        backdrop-filter: blur(10px);
        background: rgba(10, 10, 10, 0.9);
        border-bottom: 1px solid rgba(34, 211, 238, 0.15);
      }

      .nav-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'JetBrains Mono', monospace;
      }

      .logo {
        background: linear-gradient(90deg, #22d3ee, #06b6d4);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-decoration: none;
        font-weight: 600;
      }

      .nav-links {
        display: flex;
        gap: 2rem;
      }

      .nav-links a {
        color: #a1a1aa;
        text-decoration: none;
        font-size: 0.95rem;
      }

      .nav-links a:hover {
        color: #e5e4e2;
      }

      @media (max-width: 768px) {
        .nav-links {
          display: none;
        }
      }
    </style>

    <nav class="navbar">
      <div class="nav-inner">
        <a href="#hero" class="logo">mohammed@system:~$</a>

        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <i data-feather="menu"></i>
      </div>
    </nav>
  `;

  if (window.feather) feather.replace();
});
