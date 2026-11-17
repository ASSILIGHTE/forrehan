/**
 * SKY OF US — CONFIGURATION FILE
 * Semua data nama, tanggal, pesan, foto, dan kenangan dapat disesuaikan di sini.
 */

export const config = {
  // Informasi Pasangan & Pengirim
  partnerName: "Rehan",        // Nama pasangan yang berulang tahun
  senderName: "Rachel",         // Nama pengirim / panggilan sayang
  birthDate: "22 November 2026", // Tanggal ulang tahun
  targetDate: "2026-11-22T00:00:00", // Target countdown (1 Oktober 2026)

  // Audio / Musik Background
  // Gunakan URL file audio .mp3 jika ada, atau biarkan synth otomatis jika kosong/null
  bgMusicUrl: "/music.mp3",

  // PAGE 1 — "A Little Sky For You"
  hero: {
    badge: "Special Birthday Surprise ☁️",
    title: "Happy Birthday, Nayla",
    subtitle: "Dulu kita pernah terbang di langit yang sama. Sekarang kita terbang di langit masing-masing, tapi kenangannya tetap sma indahnya",
    countdownTitle: "Menghitung Hari Menuju 22 November 2026 ⏳",
    ctaButton: "Mulai Perjalanan ☁️",
  },

  // PAGE 2 — "For The Person I Love"
  loveSection: {
    badge: "UNTUK SESEORANG YANG SPESIAL",
    title: "Di Antara Sejuta Kenangan",
    mainQuote: "Di antara begitu banyak cerita yang pernah ada, ceritaku sama kamu tetap jadi salah satu yang paling indah, walaupun udah berakhir.",
    polaroidPhoto: "/images/hero.jpeg",
    polaroidCaption: "Senyum yang selalu aku ingat 💙",

    // Cloud Cards (Awan Kenangan Singkat)
    cloudCards: [
      {
        id: "senyum",
        icon: "✨",
        title: "senyumanmu begitu indah",
        shortText: "Penawar Lelah Terbaik",
        fullMessage: "Aku suka banget lihat kamu senyum, rasanya dunia langsung jadi lebih tenang dan hangat. Semoga aku bisa terus jadi alasan di balik senyumanmu itu ya, love uu.",
        tag: "Favorite Thing"
      },
      {
        id: "cerita",
        icon: "📖",
        title: "Cerita Kita",
        shortText: "Setiap Bab Yang Berharga",
        fullMessage: "Cerita kita memang udah nggak sama kayak dulu, tapi aku seneng kita masih bisa akrab dan saling peduli sampai sekarang, kamu pernah jadi bagian penting di hidup aku, aku selalu do'ain kamu bahagia terus, makasih ya udah tetap ada walau dengan cara yang berbeda.",
        tag: "Our Journey"
      },
      {
        id: "hal-kecil",
        icon: "🌸",
        title: "Hal-hal Kecil Tentang Kamu",
        shortText: "Yang Selalu Membuatku Kagum",
        fullMessage: "Aku suka banget sama cara kamu perhatian ke aku, apalagi disaat aku halangan terus kamu beliin aku jajan, rasanya tuh seneng banget diperhatiin kayak gitu. Aku juga suka banget pas kamu lagi kecintaan-kecintaannya ke aku, selalu excited ke aku, bahkan marahnya kamu sama cemburunya kamu tuh aku suka, soalnya dari situ aku ngerasa bener-bener disayang sama kamu.",
        tag: "Little Details"
      },
      {
        id: "momen",
        icon: "☁️",
        title: "Momen Yang Ingin Aku Ingat",
        shortText: "Abadi Dalam Ingatan",
        fullMessage: "waktu kita pertama kali banget nyeblak bareng pas awal-awal pacaran itu bener-bener gabisa aku lupain, disitu masih aga canggung haha tapi lucu banget pas kamu ngelapin bibir aku, ngasih minum ke aku waktu aku kelolodan enoki, duh salting banget aku waktu itu haha.",
        tag: "Unforgettable"
      }
    ]
  },

  // PAGE 3 — "Our Little Moments"
  momentsSection: {
    badge: "JEJAK PERJALANAN KITA",
    title: "Our Little Moments",
    subtitle: "Setiap langkah kecil yang kita lalui bersama di bawah langit yang sama.",

    // Timeline Momen Berharga
    timeline: [
      {
        id: 1,
        title: "First Meet",
        date: "7 Agustus 2026",
        tagline: "Pertemuan Pertama",
        description: "Pas di sekolah, kamu ngasih aku susu milku rasa cokelat. Padahal aku tuh gasuka susu cokelat, tapi tetep aku minum sampe habis. Soalnya waktu itu kamu belum terlalu kenal aku juga. Dari hal sekecil itu aja, siapa sangka malah jadi awal dari cerita kita.",
        image: "/images/meet.jpeg",
        icon: "🌱"
      },
      {
        id: 2,
        title: "First Photo Together",
        date: "10 Agustus 2026",
        tagline: "Foto Perdana",
        description: "Foto pertama yang kita ambil ketika di klinik, pas aku lagi ngejenguk temen aku. Disitu rasanya bener-bener canggung, malu, salting banget, apalagi kamu dateng bawain lazato haha. Siapa sangka, dari pertemuan yang sesimpel itu malah jadi awal dari cerita kita.",
        image: "/images/first.jpeg",
        icon: "📸"
      },
      {
        id: 3,
        title: "First Cafe",
        date: "29 Agustus 2026",
        tagline: "PERTAMA KALI NGERASAIN MALAM JADI SEHANGAT INI",
        description: "Pertama kali ke cafe bareng cowok yaitu kamu, menikmati malam yang rame, ngeliatin banyak motor dari atas sambil cerita-cerita. Padahal hal sesimpel itu, tapi buat aku rasanya udah bahagia banget, apalagi karena yang nemeninnya kamu.",
        image: "/images/adventure.jpeg",
        icon: "🌅"
      },
      {
        id: 4,
        title: "Fresh Flowers",
        date: "22 Agustus 2026",
        tagline: "BUNGA PERTAMA YANG GAK AKAN AKU LUPAIN",
        description: "Pas aku lagi jalan sama kamu malming kala itu, terus kamu ngebeliin aku fresh flowers. Seneng banget, karena kamu juga cowok pertama yang ngebeliin aku fresh flowers. Lucu ya, hal sekecil itu aja bisa bikin aku bener-bener bahagia banget pada malem itu.",
        image: "/images/sunset.jpeg",
        icon: "💖"
      }
    ]
  },

  // PAGE 4 — "One More Wish" (Sunset Atmosphere)
  sunsetSection: {
    badge: "SATU HARAPAN DI BAWAH SENJA",
    title: "One More Wish",
    subtitle: "Saat senja perlahan meredup dan bintang-bintang mulai menyala...",
    mainPhoto: "/images/mirror.jpeg",
    mainMessage: `Selamat ulang tahun ya.
Ini pertama kalinya aku ngucapin ulang tahun ke kamu.
Gak nyangka ya ngucapinnya pas kita udah gak bareng lagi.  Makasih udah pernah jadi bagian dari ceritaku.
Semoga di umur barumu ini kamu selalu bahagia, sehat, dan semua yang kamu mau bisa tercapai ya.
Aku doain kamu dari sini aja.`,

    letterButtonText: "Open My Last Message 💙",

    // Pesan Rahasia di Dalam Surat Digital
    secretLetter: {
      title: "Surat Kecil Untukmu ✉️",
      quote: "Kalau dunia ini adalah langit,\naku harap kita selalu punya tempat untuk terbang bersama.",
      body: `Semoga setiap langkahmu di masa depan selalu dibimbing menuju hal-hal yang baik, dan hatimu selalu ditenangkan dalam setiap situasi. 

Terima kasih pernah datang ke dalam hidupku dan mengajarkanku banyak hal, baik yang membahagiakan maupun yang menguatkan hatiku.

Meski kebersamaan kita tak lagi sama, ketahuilah bahwa kebahagiaanmu tetap menjadi salah satu hal yang aku doakan. Tetaplah menjadi dirimu yang hebat, karena ada banyak hal indah yang sedang menunggumu di depan sana.`,
      closing: "With all my love,"
    }
  }
};
