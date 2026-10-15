function redirectToPage(url) {
    window.location.href = url;
   }
   document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    dropdownBtn.addEventListener('click', () => {
      dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        dropdownContent.style.display = 'none';
      }
    });
  });

(function () {
    const key = "pageReloaded";

    if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "true");
        location.reload(true);
    }

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            location.reload();
        }
    });
})();

function download(url) {
  const link = document.createElement("a");
    link.href = url;
    link.download = ""; // Suggests downloading the file using its original name
    document.body.appendChild(link);
    link.click();
    link.remove();
}