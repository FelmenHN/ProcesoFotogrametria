(() => {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Cerrar imagen">×</button>
    <div class="lightbox-stage">
      <img alt="Vista ampliada">
      <div class="lightbox-caption"></div>
    </div>`;
  document.body.appendChild(modal);
  const modalImg = modal.querySelector('img');
  const caption = modal.querySelector('.lightbox-caption');
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('no-scroll');
  };
  const open = (img) => {
    modalImg.src = img.src;
    modalImg.alt = img.alt || 'Vista ampliada';
    caption.textContent = img.alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('no-scroll');
  };
  document.querySelectorAll('img.zoomable').forEach(img => {
    img.addEventListener('click', () => open(img));
    img.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') {e.preventDefault(); open(img);} });
  });
  modal.querySelector('.lightbox-close').addEventListener('click', close);
  modal.addEventListener('click', e => { if(e.target === modal) close(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
})();
