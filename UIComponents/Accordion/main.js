// Write your JavaScript here.
(() => {
  function accordion($rootEl) {
    function attachEvents() {
      // Use Event Delegation
      $rootEl.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName !== 'BUTTON' || !target.classList.contains('accordion-item-title')) {
          return;
        }

        // Find the icon and toggle the direction.
        const $icon = target.querySelector('.accordion-icon');
        $icon.classList.toggle('accordion-icon--rotated');

        // Find the accordion contents and toggle the 
        // contents' visibility
        const $accordionItemContents = target.nextSibling.nextSibling
        $accordionItemContents.classList.toggle('hidden');
      });
    }
    attachEvents();
  }

  accordion(document.getElementById('accordion'));
})();