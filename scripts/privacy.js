const privacyLink = document.getElementById("privacyLink"); 
const privacyModal = document.getElementById("privacyModal");
const closePrivacy = document.getElementById("closePrivacy");

// Open modal on footer link click
privacyLink.addEventListener("click", (e) => {
  e.preventDefault();
  privacyModal.style.display = "flex";
});

// Close modal on close button click
closePrivacy.addEventListener("click", () => {
  privacyModal.style.display = "none";
});

// Close modal if clicked outside content
window.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    privacyModal.style.display = "none";
  }
});
