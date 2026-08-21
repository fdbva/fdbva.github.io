(() => {
  'use strict';

  document.documentElement.classList.remove('no-js');

  const printButton = document.querySelector('[data-resume-action="print"]');

  if (printButton instanceof HTMLButtonElement) {
    printButton.addEventListener('click', () => window.print());
  }
})();
