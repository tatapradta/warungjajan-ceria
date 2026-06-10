// ===== DATA PRODUK =====
// EDIT SECTION INI UNTUK MENAMBAH/MENGUBAH DETAIL PRODUK
const productsData = {
    cireng: {
        title: "Cireng",
        details: [
            {
                name: "Cireng Rasa Pedas",
                description: "Cireng isi ayam suwir yang ditaburin dengan bumbu pedas pilihan, cocok untuk yang suka sensasi spicy"
            },
            {
                name: "Cireng Rasa Original",
                description: "Cireng dengan isi ayam suwir bumbu gurih yang nikmat, dibuat dengan resep tradisional warung kami"
            },
            {
                name: "Cireng Rasa Keju",
                description: "Cireng dengan sentuhan manis dan gurih, keju lezat meleleh di setiap gigitan, sempurna untuk snack sore hari"
            }
        ]
    },
    sosis: {
        title: "Sosis Ulir",
        details: [
            {
                name: "Sosis Ulir Standar",
                description: "Sosis dengan tekstur empuk, dibuat spiral"
            },
        ]
    },
    Mie: {
        title: "Mie",
        details: [
            {
                name: "Mie sakura ori",
                description: "Mie yang lezat dan murah"
            },
            {
                name: "Mie sakura seblak",
                description: "varian yang menggunakan kuah dan rasa seblak pedas sebagai rasa utama"
            },
        ]
    },
    nutrisari: {
        title: "Nutrisari",
        details: [
            {
                name: "Nutrisari Jeruk Peras",
                description: "Minuman serbuk dengan vitamin C dari jeruk, segar dan menyegarkan"
            },
            {
                name: "Nutrisari Sweet orange",
                description: "Rasa jeruk yang manis dan menyegarkan"
            },
            {
                name: "Nutrisari Semangka",
                description: "Minuman dengan vitamin dari semangka, kaya akan nutrisi dan energi"
            }
        ]
    },
    esteh: {
        title: "Esteh",
        details: [
            {
                name: "Esteh Manis",
                description: "Teh manis yang segar, sempurna untuk melepas haus"
            },
        ]
    },
    Popice: {
        title: "Popice Best seller",
        details: [
            {
                name: "PopIce Coklat",
                description: "coklat yang manis membuat harimu manis"
            },
            {
                name: "PopIce ChocoCheese",
                description: "coklat digabung dengan rasa keju"
            },
            {
                name: "PopIce capucino",
                description: "rasa kopi capucino memang the best"
            },
            {
                name: "Lainnya",
                description: "Masih banyak rasa popice lainnya yang cocok untuk anda nikmati"
            }
        ]
    },
    cokolatos: {
        title: "Cokolatos",
        details: [
            {
                name: "Cokolatos Rasa Cokelat",
                description: "Minuman cokelat dengan texture lembut dan rasa cokelat yang kaya"
            },
            {
                name: "Cokolatos Rasa Matcha",
                description: "Matcha timeeee"
            },
        ]
    },
    jasjus: {
        title: "Jasjus",
        details: [
            {
                name: "Jasjus Rasa Jambu",
                description: "Minuman sari buah jambu yang segar dengan rasa asam manis yang pas"
            },
            {
                name: "Jasjus Rasa Apel",
                description: "Jus apel yang menyegarkan dengan nutrisi lengkap dari buah apel premium"
            },
            {
                name: "Jasjus Rasa Pir",
                description: "Minuman dari buah pir yang lezat, cocok diminum saat cuaca panas"
            }
        ]
    },
    teajus: {
        title: "Teajus",
        details: [
            {
                name: "Teajus gula batu",
                description: "Teh yang segar, manis, dan murah"
            },
        ]
    }
};

// ===== FUNGSI MODAL =====
function openModal(productKey) {
    const product = productsData[productKey];
    if (!product) return;

    const modal = document.getElementById('productModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = product.title;
    body.innerHTML = '';

    product.details.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'modal-item';
        itemDiv.innerHTML = `
            <strong>${item.name}</strong><br>
            <p>${item.description}</p>
        `;
        body.appendChild(itemDiv);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal(event) {
    // Hanya tutup jika klik di area background
    if (event && event.target.id !== 'productModal') return;

    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal dengan tombol ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
