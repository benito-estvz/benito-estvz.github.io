document.addEventListener('DOMContentLoaded', function() {
    const fontCodeButtons = document.querySelectorAll('.btnfontcode');
  
    fontCodeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        window.open('https://github.com/benito-estvz/benito-estvz.github.io', '_blank');
      });
    });
  });