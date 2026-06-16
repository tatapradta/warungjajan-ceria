# 📖 PANDUAN MENGEDIT WEBSITE WARUNG JAJAN CERIA

Selamat! Website Anda sudah siap dengan section produk yang interaktif. Berikut panduan lengkap untuk mengedit dan menyempurnakannya.

---

## 📁 STRUKTUR FOLDER

```
web warung/
├── index.html              (File HTML utama)
├── assets/
│   ├── image/             (Folder untuk gambar produk)
│   ├── style/
│   │   └── app.css        (File CSS styling)
│   └── js/
│       └── app.js         (File JavaScript - EDIT BAGIAN DETAIL PRODUK DI SINI)
```

---

## 🖼️ CARA MENAMBAHKAN GAMBAR PRODUK

### Langkah 1: Siapkan Gambar
1. Potong/resize gambar produk Anda (rekomendasi ukuran: 400x400px untuk hasil terbaik)
2. Format gambar: JPG atau PNG

### Langkah 2: Upload Gambar
1. Copy gambar ke folder: `assets/image/`
2. Beri nama file sesuai produk, contoh:
   - `cireng.jpg`
   - `sosis.jpg`
   - `popice.jpg`
   - `nutrisari.jpg`
   - `esteh.jpg`
   - `cokolatos.jpg`
   - `jasjus.jpg`
   - `teajus.jpg`

### Langkah 3: Edit File index.html
Buka file `index.html` dan cari kode gambar produk (contoh untuk Cireng):

**SEBELUM:**
```html
<img src="assets/image/placeholder-cireng.png" alt="Cireng" onerror="this.style.display='none'">
```

**SESUDAH (jika file Anda bernama cireng.jpg):**
```html
<img src="assets/image/cireng.jpg" alt="Cireng" onerror="this.style.display='none'">
```

---

## ✏️ CARA MENGUBAH DETAIL PRODUK

Semua detail produk disimpan di file: `assets/js/app.js`

### Menemukan Data Produk
Buka file `app.js` dan cari bagian:
```javascript
// ===== DATA PRODUK =====
// EDIT SECTION INI UNTUK MENAMBAH/MENGUBAH DETAIL PRODUK
const productsData = {
```

### Contoh: Mengubah Detail Cireng

**Format Struktur:**
```javascript
cireng: {
    title: "Cireng",              // Nama produk
    details: [
        {
            name: "Cireng Rasa Pedas",      // Nama varian
            description: "Deskripsi..."      // Deskripsi varian
        },
        // ... varian lainnya
    ]
},
```

**Contoh Perubahan:**
```javascript
cireng: {
    title: "Cireng",
    details: [
        {
            name: "Cireng Pedas Sambal Matah",
            description: "Cireng dengan sambal matah khas Bali yang pedas dan enak"
        },
        {
            name: "Cireng Gurih Kacang",
            description: "Cireng dengan rasa gurih dari bumbu kacang yang nikmat"
        },
        {
            name: "Cireng Manis BBQ",
            description: "Cireng dengan sauce BBQ manis yang memanjakan lidah"
        }
    ]
},
```

### Format Penulisan:
- Gunakan tanda `"` untuk membuka dan menutup text
- Gunakan `\n` jika ingin baris baru dalam deskripsi
- Pastikan setiap item diakhiri dengan koma `,` (kecuali item terakhir dalam array)

---

## 🎨 MENGUBAH WARNA DAN STYLING

Semua styling ada di: `assets/style/app.css`

### Warna Utama Website
Cari dan ubah warna dengan format berikut:

**Warna Merah (sekarang #af0000):**
```css
/* Cari: #af0000 */
/* Ubah menjadi kode warna yang Anda inginkan */
.category-title {
    color: #af0000;  /* Ubah warna di sini */
}
```

### Contoh Mengubah Warna:
```css
/* SEBELUM */
.category-title {
    color: #af0000;
}

/* SESUDAH - Ganti dengan warna biru */
.category-title {
    color: #0066cc;
}
```

### Warna Umum yang Digunakan:
- `#af0000` - Merah tua (accent color)
- `#ffffff` - Putih (background)
- `#333` - Abu-abu gelap (text)
- `#f8f9fa` - Abu-abu muda (card background)

---

## 📱 CEK RESPONSIF DI MOBILE

1. Buka file `index.html` di browser
2. Tekan `F12` untuk buka Developer Tools
3. Klik tombol "Toggle device toolbar" atau tekan `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)
4. Test di berbagai ukuran layar

---

## ❓ PERTANYAAN UMUM

### Q: Gambar saya tidak muncul?
**A:** Pastikan:
- Nama file benar (case-sensitive)
- File ada di folder `assets/image/`
- Format file benar (JPG atau PNG)
- Path di HTML sesuai: `assets/image/namafile.jpg`

### Q: Cara menambah produk baru?
**A:** 
1. Tambahkan card HTML baru di section masing-masing di `index.html`
2. Tambahkan data di `assets/js/app.js` dengan key yang sama dengan `onclick`
3. Upload gambar ke `assets/image/`

### Q: Cara menghapus produk?
**A:**
1. Hapus card HTML di `index.html`
2. Hapus data dari `assets/js/app.js`

### Q: Cara mengubah urutan produk?
**A:** Edit urutan `<div class="product-card">` di `index.html`

---

## 🔗 LINK REFERENSI

- **Warna Online Tool:** https://www.colorhexa.com/
- **Image Optimizer:** https://tinypng.com/
- **HTML Color Names:** https://www.w3schools.com/colors/colors_names.asp

---

## 💡 TIPS

1. **Backup file:** Selalu backup file sebelum membuat perubahan besar
2. **Ukuran file:** Compress gambar agar website loading lebih cepat
3. **Konsistensi:** Gunakan ukuran gambar yang sama untuk semua produk
4. **Spasi:** Jangan lupa koma di akhir setiap object di `productsData`

---

## 🆘 BANTUAN

Jika ada error:
1. Buka Developer Console (F12 → Console tab)
2. Lihat pesan error
3. Biasanya error terkait:
   - Koma yang hilang di `app.js`
   - Path gambar yang salah
   - Syntax error

---

**Happy Editing! 🚀**

Jika ingin menambah fitur lebih, jangan ragu untuk minta bantuan!
