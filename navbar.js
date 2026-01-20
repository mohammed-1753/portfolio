class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
                
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    background-color: rgba(10, 10, 10, 0.9);
                    border-bottom: 1px solid rgba(34, 211, 238, 0.1);
                }
                
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                }
                
                .logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #e5e4e2;
                    text-decoration: none;
                    font-family: 'JetBrains Mono', monospace;
                    background: linear-gradient(to right, #22d3ee, #06b6d4);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #a1a1aa;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #e5e4e2;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(to right, #22d3ee, #06b6d4);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: #a1a1aa;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <nav class="nav-container">
                <a href="#hero" class="logo">mohammed@system:~$</a>
                
                <div class="nav-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#journey" class="nav-link">Journey</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
                
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);