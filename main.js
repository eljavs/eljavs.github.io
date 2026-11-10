// Lite YouTube embeds: show the thumbnail, load the player only on click.
document.querySelectorAll('.yt').forEach(el => {
  const id = el.dataset.id;
  el.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  el.setAttribute('role', 'button');
  el.setAttribute('aria-label', 'Play video: ' + (el.dataset.title || ''));
  el.tabIndex = 0;
  const play = () => {
    if (el.classList.contains('playing')) return;
    el.classList.add('playing');
    el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
      title="${el.dataset.title || 'YouTube video'}"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  };
  el.addEventListener('click', play);
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
});

// Gallery lightbox
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
document.querySelectorAll('.gallery img, .cover').forEach(img => {
  img.addEventListener('click', () => {
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    box.showModal();
  });
});
box.addEventListener('click', () => box.close());

document.getElementById('year').textContent = new Date().getFullYear();
