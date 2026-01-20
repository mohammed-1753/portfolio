class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
                
                :host {
                    display: block;
                    background: linear-gradient(to top, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.98));
                    border-top: 1px solid rgba(34, 211, 238, 0.1);
                    padding: 3rem 0 2rem;
                    margin-top: 4rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section h3 {
                    color: #e5e4e2;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    background: linear-gradient(to right, #22d3ee, #06b6d4);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .footer-section p,
                .footer-section a {
                    color: #a1a1aa;
                    text-decoration: none;
                    font-size: 0.9rem;
                    line-height: 1.8;
                    transition: color 0.3s ease;
                }
                
                .footer-section a:hover {
                    color: #e5e4e2;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: rgba(34, 211, 238, 0.2);
                    border-color: rgba(34, 211, 238, 0.4);
                    transform: translateY(-2px);
                }
                
                .social-link i {
                    width: 18px;
                    height: 18px;
                    color: #a1a1aa;
                    transition: color 0.3s ease;
                }
                
                .social-link:hover i {
                    color: #e5e4e2;
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 2rem;
                    text-align: center;
                    color: #71717a;
                    font-size: 0.85rem;
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .footer-bottom a {
                    color: #a1a1aa;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-bottom a:hover {
                    color: #e5e4e2;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    
                    :host {
                        padding: 2rem 0 1.5rem;
                    }
                }
            </style>
            
            <footer class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Mohammed Fatehpurwala</h3>
                        <p>Security Engineer | Backend Developer | Cloud Architect</p>
                        <p class="text-xs text-zinc-500 mt-2 font-mono">Building secure systems with precision.</p>
                        <div class="social-links">
                            <a href="#" class="social-link" aria-label="GitHub">
                                <i data-feather="github"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="LinkedIn">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Email">
                                <i data-feather="mail"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Navigation</h3>
                        <p><a href="#about">About</a></p>
                        <p><a href="#skills">Skills</a></p>
                        <p><a href="#projects">Projects</a></p>
                        <p><a href="#journey">Journey</a></p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Focus Areas</h3>
                        <p>Cybersecurity</p>
                        <p>Backend Development</p>
                        <p>Cloud Computing</p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; <span id="current-year">2024</span> Mohammed Fatehpurwala. All rights reserved.</p>
                    <p class="text-xs mt-2 opacity-70">Security Engineer | Backend Developer</p>
                </div>
            </footer>
        `;
        
        // Initialize feather icons after shadow DOM is attached
        const initFeatherIcons = () => {
            if (window.feather && window.feather.icons) {
                // Replace icons in shadow DOM
                const icons = this.shadowRoot.querySelectorAll('[data-feather]');
                icons.forEach(icon => {
                    const iconName = icon.getAttribute('data-feather');
                    if (window.feather.icons[iconName]) {
                        icon.outerHTML = window.feather.icons[iconName].toSvg({
                            'stroke-width': 2,
                            width: 18,
                            height: 18
                        });
                    }
                });
            }
        };
        
        // Try to initialize immediately, or wait for feather to load
        if (window.feather && window.feather.icons) {
            initFeatherIcons();
        } else {
            // Wait for feather to load
            const checkFeather = setInterval(() => {
                if (window.feather && window.feather.icons) {
                    initFeatherIcons();
                    clearInterval(checkFeather);
                }
            }, 100);
            
            // Stop checking after 5 seconds
            setTimeout(() => clearInterval(checkFeather), 5000);
        }
        
        // Set current year
        const yearSpan = this.shadowRoot.querySelector('#current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
}

customElements.define('custom-footer', CustomFooter);
