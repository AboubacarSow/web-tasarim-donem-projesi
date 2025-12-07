// Sidebar toggle (Desktop button)
document.getElementById("sidebarToggle")?.addEventListener("click", () => {
  const toggle = document.querySelector("#sidebarToggle i"); // select the <i> inside the button
  toggle.classList.toggle("bi-list"); // remove the hamburger
  toggle.classList.toggle("bi-x");
  document.getElementById("sidebar").classList.toggle("show");
});

// Sidebar toggle (Mobile top header button)
document.getElementById("mobileToggle")?.addEventListener("click", () => {

  document.getElementById("sidebar").classList.toggle("show");
});


const ctx = document.getElementById("visitsChart");

if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
      datasets: [{
        label: "Ziyaretçi",
        data: [1200, 1900, 3000, 2500, 3200, 4100],
        borderWidth: 2
      }]
    }
  });
}

// Chart.js – Monthly published blogs (Histogram)
const ctx2 = document.getElementById("blogsChart");

if (ctx2) {
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
      datasets: [{
        label: "Yayınlanan Bloglar",
        data: [3, 5, 2, 6, 4, 7],
        borderWidth: 1
      }]
    }
  });
}


tinymce.init({
  selector: '#editor',
  height: 350,
  plugins: 'lists image link table code',
  toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | image link table | code',
  menubar: false
});

// Image Preview
const upload = document.getElementById("imageUpload");
const preview = document.getElementById("imagePreview");

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    preview.style.display = "block";
    preview.src = URL.createObjectURL(file);
  }
});

document.querySelectorAll('.nav-link[data-bs-toggle="collapse"]').forEach(link => {
  link.addEventListener('click', () => {
    const icon = link.querySelector('.bi-chevron-down');
    if(icon) icon.classList.toggle('rotate');
  });
});
