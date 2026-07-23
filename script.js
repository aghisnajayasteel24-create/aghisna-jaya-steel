console.log("Website Aghisna Jaya Steel Berhasil Dimuat");

document.addEventListener("DOMContentLoaded", function() {
    // Efek interaksi klik pada gambar galeri (bisa dikembangkan untuk preview / lightbox)
    const galleryImages = document.querySelectorAll(".gallery img");
    
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            console.log("Pengunjung melihat detail foto: " + img.alt);
        });
    });
});
