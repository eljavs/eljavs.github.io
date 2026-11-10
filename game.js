// Loads a game's write-up (Markdown in writeups/<slug>.md) into the page.
// HTML comments in the file are ignored, so an untouched template shows the "coming soon" note.
const target = document.querySelector('[data-writeup]');
if (target) {
  fetch(target.dataset.writeup, { cache: 'no-cache' })
    .then(r => (r.ok ? r.text() : ''))
    .then(md => {
      const text = md.replace(/<!--[\s\S]*?-->/g, '').trim();
      if (text && window.marked) target.innerHTML = marked.parse(text);
    })
    .catch(() => {});
}
