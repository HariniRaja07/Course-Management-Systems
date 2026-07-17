/* EduTrack — shared front-end interactions (demo only, no backend calls) */

// Animate progress bars on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.progress-fill[data-value]').forEach(el => {
    const val = el.getAttribute('data-value');
    requestAnimationFrame(() => { el.style.width = val + '%'; });
  });
});

// Generic form "submit" handler for demo pages: prevents real navigation,
// shows an inline success/error alert, keeps everything client-side.
function handleDemoSubmit(formEl, alertId, message, redirect) {
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    formEl.querySelectorAll('[required]').forEach(input => {
      const field = input.closest('.field');
      if (!input.value.trim()) {
        valid = false;
        if (field) field.classList.add('has-error');
      } else if (field) {
        field.classList.remove('has-error');
      }
    });
    if (!valid) return;

    const alertBox = document.getElementById(alertId);
    if (alertBox) {
      alertBox.textContent = message;
      alertBox.style.display = 'flex';
    }
    if (redirect) {
      setTimeout(() => { window.location.href = redirect; }, 900);
    }
  });
}

// Mark a module complete (demo, in-memory only)
function markModuleComplete(btn, itemEl) {
  const check = itemEl.querySelector('.module-check');
  check.classList.remove('current');
  check.classList.add('done');
  check.innerHTML = '&#10003;';
  btn.textContent = 'Completed';
  btn.disabled = true;
}

// Toggle mobile sidebar (if present)
function toggleSidebar() {
  const sb = document.querySelector('.sidebar');
  if (sb) sb.classList.toggle('open');
}
