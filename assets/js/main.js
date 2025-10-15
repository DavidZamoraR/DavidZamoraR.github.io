// Marcar links externos con rel seguro
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (!a.href.includes(location.hostname)) a.setAttribute('rel', 'noopener');
});

// Botón copiar en bloques <pre><code>
document.querySelectorAll('pre > code').forEach(code => {
  const btn = document.createElement('button');
  btn.textContent = 'Copiar';
  btn.className = 'btn btn--ghost';
  btn.style.position = 'absolute';
  btn.style.top = '.5rem';
  btn.style.right = '.5rem';
  btn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(code.innerText);
    btn.textContent = '¡Copiado!';
    setTimeout(() => (btn.textContent = 'Copiar'), 1400);
  });
  code.parentElement.style.position = 'relative';
  code.parentElement.appendChild(btn);
});
