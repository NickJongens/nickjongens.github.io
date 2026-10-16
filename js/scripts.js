/* Site interactions */
document.documentElement.classList.add('js');

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-theme', themeToggle.checked);
    });
}

// Keep native anchor navigation so root, hash, and cross-page links all work.
// The browser provides accessible keyboard behavior and updates the URL hash.

// Track meaningful conversion actions in PostHog.
document.querySelectorAll('[data-analytics="contact"]').forEach(link => {
    link.addEventListener('click', () => {
        if (window.posthog) posthog.capture('contact_cta_clicked', { destination: link.getAttribute('href') });
    });
});// Record a successful form redirect on the thank-you page.
if (window.posthog && (window.location.pathname.endsWith("/thank-you.html") || window.location.pathname.endsWith("/thank-you"))) {
    posthog.capture('contact_form_success');
}

// Progressive reveal remains decorative; all content stays visible to crawlers and no-script visitors.
const revealElements = document.querySelectorAll('.reveal');
function handleScroll() {
    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
            element.classList.add('revealed');
        }
    });
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();
