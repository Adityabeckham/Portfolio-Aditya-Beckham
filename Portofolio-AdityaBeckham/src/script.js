
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .sertifikat-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


const typed = new Typed(".multiple-text", {
  strings: [" Junior Frontend Developer", "", ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Menangani Form Contact dan menyimpan ke Local Storage
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form dari reload halaman

  // Ambil data dari input form
  const name = this.querySelector('input[placeholder="Full Name"]').value;
  const email = this.querySelector('input[placeholder="Email Address"]').value;
  const mobile = this.querySelector('input[placeholder="Mobile Number"]').value;
  const subject = this.querySelector('input[placeholder="Email Subject"]').value;
  const message = this.querySelector("textarea").value;

  // Buat objek data
  const contactData = {
    name,
    email,
    mobile,
    subject,
    message,
    time: new Date().toISOString() // Optional: untuk mencatat waktu
  };

  // Ambil data yang sudah ada di Local Storage (jika ada)
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // Tambahkan data baru
  contacts.push(contactData);

  // Simpan kembali ke Local Storage
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // Bersihkan form
  this.reset();

  // Opsional: tampilkan notifikasi
  alert("Pesan Anda telah disimpan di Local Storage. Terima kasih!");
});
