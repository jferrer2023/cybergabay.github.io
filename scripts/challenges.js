// ===================================================
// DYNAMIC HEADER & FOOTER LOADER + ACTIVE LINK
// ===================================================

// Load header dynamically
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // ✅ Highlight active navbar link
    const currentPage = "challenges.html";
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href.includes(currentPage)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  })
  .catch(err => console.error("Header load error:", err));

// Load footer dynamically
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer load error:", err));
