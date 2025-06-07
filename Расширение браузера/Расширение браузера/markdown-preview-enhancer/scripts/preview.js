document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.spoiler details').forEach(details => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        details.style.animation = 'fadeIn 0.5s';
      }
    });
  });
});

const mermaidScript = document.createElement('script');
mermaidScript.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
mermaidScript.onload = () => {
  mermaid.initialize({ startOnLoad: true });
};
document.body.appendChild(mermaidScript);
