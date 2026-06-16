/* ============================================================
   CONTOH BACKEND — Vercel Serverless Function
   File ini AMAN menyimpan token, karena berjalan di server
   Vercel, bukan di browser pengunjung.

   CARA PAKAI:
   1. Buat folder "api" di root project Anda (kalau belum ada),
      lalu simpan file ini sebagai: api/kirim-pesanan.js
   2. Daftarkan TELEGRAM_BOT_TOKEN dan TELEGRAM_CHAT_ID sebagai
      "Environment Variables" di dashboard Vercel
      (Project Settings > Environment Variables) — JANGAN
      ditulis langsung di kode ini.
   3. Deploy project Anda ke Vercel.
   4. Salin URL yang muncul, contoh:
      https://warungjajanceria.vercel.app/api/kirim-pesanan
   5. Tempel URL itu ke ORDER_ENDPOINT_URL di pesan-script.js
   ============================================================ */

export default async function handler(req, res) {
    // Hanya izinkan method POST
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { nama, pesanan, alamat, catatan } = req.body || {};

    // Validasi ulang di sisi server (jangan percaya validasi frontend saja)
    if (!nama || !pesanan || !alamat) {
        return res.status(400).json({ error: "Data tidak lengkap" });
    }

    // Ambil kredensial dari Environment Variables Vercel (AMAN, tidak ada di kode)
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Susun pesan yang akan dikirim ke Telegram
    const text =
        `🛒 *PESANAN BARU - WarungJajanCeria*\n\n` +
        `👤 *Nama:* ${escapeMarkdown(nama)}\n` +
        `🍽️ *Pesanan:* ${escapeMarkdown(pesanan)}\n` +
        `📍 *Alamat:* ${escapeMarkdown(alamat)}\n` +
        `📝 *Catatan:* ${escapeMarkdown(catatan || "-")}`;

    try {
        const tgResponse = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text,
                    parse_mode: "Markdown",
                }),
            }
        );

        if (!tgResponse.ok) {
            const errData = await tgResponse.text();
            console.error("Telegram API error:", errData);
            return res.status(502).json({ error: "Gagal mengirim ke Telegram" });
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Server error:", err);
        return res.status(500).json({ error: "Terjadi kesalahan server" });
    }
}

// Mencegah karakter spesial Markdown merusak format pesan Telegram
function escapeMarkdown(text) {
    return String(text).replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
}
