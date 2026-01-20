// Terminal Command Execution
function executeCommand(command) {
    const terminalBody = document.querySelector('.terminal-body');
    const activeLine = terminalBody.querySelector('.active-line');
    
    if (!activeLine) return;
    
    // Remove cursor from active line
    activeLine.classList.remove('active-line');
    activeLine.innerHTML = `
        <span class="terminal-prompt">$</span>
        <span class="terminal-command">${command}</span>
    `;
    
    // Create new active line
    const newLine = document.createElement('div');
    newLine.className = 'terminal-line active-line';
    newLine.innerHTML = `
        <span class="terminal-prompt">$</span>
        <span class="terminal-cursor">█</span>
    `;
    
    // Handle different commands
    setTimeout(() => {
        let output = '';
        
        switch(command) {
            case 'scan --vulnerabilities':
                output = `
                    <div class="terminal-output">
                        <div class="output-line">[SCANNING] Analyzing system...</div>
                        <div class="output-line">[OK] Authentication: Secure</div>
                        <div class="output-line">[OK] Input Validation: Active</div>
                        <div class="output-line">[OK] Encryption: Enabled</div>
                        <div class="output-line">[INFO] No critical vulnerabilities detected.</div>
                    </div>
                `;
                break;
            case 'cat projects/':
                output = `
                    <div class="terminal-output">
                        <div class="output-line">CASE-001  Digital Forensics Toolkit</div>
                        <div class="output-line">CASE-002  Secure API Backend</div>
                        <div class="output-line">CASE-003  Vulnerability Scanner</div>
                        <div class="output-line">[INFO] Use 'decrypt CASE-XXX' to view details</div>
                    </div>
                `;
                break;
            case 'connect':
                output = `
                    <div class="terminal-output">
                        <div class="output-line">[CONNECTING] Establishing secure channel...</div>
                        <div class="output-line">[OK] Connection established</div>
                        <div class="output-line">[INFO] Redirecting to contact section...</div>
                    </div>
                `;
                setTimeout(() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }, 1000);
                break;
            default:
                output = `
                    <div class="terminal-output">
                        <div class="output-line">[ERROR] Command not found: ${command}</div>
                        <div class="output-line">[INFO] Available commands: scan, cat, connect</div>
                    </div>
                `;
        }
        
        activeLine.insertAdjacentHTML('afterend', output);
        terminalBody.appendChild(newLine);
        
        // Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }, 500);
}

// Case File Decryption
function decryptCase(caseNumber) {
    const caseFile = document.querySelector(`[data-case="${caseNumber}"]`);
    const details = document.getElementById(`case-${caseNumber}-details`);
    const button = caseFile.querySelector('.case-decrypt-btn');
    
    if (!caseFile || !details) return;
    
    const isExpanded = caseFile.classList.contains('expanded');
    
    if (isExpanded) {
        // Encrypt (close)
        caseFile.classList.remove('expanded');
        details.classList.remove('expanded');
        button.innerHTML = '<span class="font-mono text-xs">[DECRYPT]</span>';
    } else {
        // Decrypt (open)
        caseFile.classList.add('expanded');
        details.classList.add('expanded');
        button.innerHTML = '<span class="font-mono text-xs">[ENCRYPT]</span>';
        
        // Add decryption animation effect
        details.style.opacity = '0';
        setTimeout(() => {
            details.style.transition = 'opacity 0.5s ease';
            details.style.opacity = '1';
        }, 100);
    }
}

// Terminal Typing Animation
function initTerminalTyping() {
    const typingElements = document.querySelectorAll('.typing');
    
    typingElements.forEach((element, index) => {
        const command = element.getAttribute('data-command');
        if (!command) return;
        
        element.textContent = '';
        element.style.width = '0';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < command.length) {
                    element.textContent += command[i];
                    i++;
                } else {
                    clearInterval(typeInterval);
                    // Show output after typing
                    setTimeout(() => {
                        const outputId = element.closest('.terminal-line').nextElementSibling?.id;
                        if (outputId) {
                            const output = document.getElementById(outputId);
                            if (output) {
                                output.style.opacity = '0';
                                output.style.display = 'block';
                                setTimeout(() => {
                                    output.style.transition = 'opacity 0.5s ease';
                                    output.style.opacity = '1';
                                }, 100);
                            }
                        }
                    }, 500);
                }
            }, 50);
        }, index * 2000);
    });
}

// Security Scanner Animation
function initSecurityScanner() {
    const scanner = document.querySelector('.security-scanner');
    if (!scanner) return;
    
    // Create multiple scanner lines
    for (let i = 0; i < 3; i++) {
        const line = document.createElement('div');
        line.className = 'security-scanner';
        line.style.animationDelay = `${i * 1}s`;
        line.style.position = 'absolute';
        line.style.width = '100%';
        line.style.height = '2px';
        line.style.top = `${20 + i * 30}%`;
        scanner.parentElement.appendChild(line);
    }
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe system layers
    document.querySelectorAll('.system-layer').forEach(layer => {
        layer.style.opacity = '0';
        layer.style.transform = 'translateY(20px)';
        layer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(layer);
    });
    
    // Observe case files
    document.querySelectorAll('.case-file').forEach(file => {
        file.style.opacity = '0';
        file.style.transform = 'translateY(20px)';
        file.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(file);
    });
}

// Component Card Hover Effects
function initComponentCards() {
    document.querySelectorAll('.component-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Terminal Commands on Page Load
function initTerminalCommands() {
    // Add click handlers to terminal buttons
    document.querySelectorAll('.terminal-btn').forEach(btn => {
        const command = btn.textContent.trim();
        btn.onclick = () => executeCommand(command);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTerminalTyping();
    initSecurityScanner();
    initScrollAnimations();
    initComponentCards();
    initSmoothScroll();
    initTerminalCommands();
    
    // Initialize feather icons if available
    if (window.feather) {
        setTimeout(() => {
            feather.replace();
        }, 500);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any size-dependent animations
});

// Add keyboard shortcuts for terminal
document.addEventListener('keydown', (e) => {
    // Focus terminal input if user types (for future enhancement)
    if (e.key === 'Enter' && e.target.classList.contains('terminal-input')) {
        const command = e.target.value;
        executeCommand(command);
        e.target.value = '';
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    if (hero) {
        const rate = scrolled * 0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    // Scroll-based animations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);
