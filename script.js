// Global Variables
let currentQuizCategory = 'tata-bahasa';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizData = {};

let currentEssayCategory = 'pendidikan';
let essayData = {};

// Quiz Data (More questions added for variety)
const quizQuestions = {
    'tata-bahasa': [
        {
            question: "Pilihlah kalimat yang menggunakan konjungsi koordinatif yang tepat.",
            options: [
                "Dia belajar giat, sehingga lulus ujian.",
                "Dia belajar giat, tetapi tidak lulus ujian.",
                "Dia belajar giat, agar lulus ujian.",
                "Dia belajar giat, ketika ujian tiba."
            ],
            correct: 1,
            explanation: "Konjungsi koordinatif 'tetapi' digunakan untuk menyatakan pertentangan antara dua klausa yang setara."
        },
        {
            question: "Manakah dari kalimat berikut yang merupakan kalimat efektif?",
            options: [
                "Bagi semua mahasiswa diharapkan hadir tepat waktu.",
                "Semua mahasiswa diharapkan hadir tepat waktu.",
                "Diharapkan bagi semua mahasiswa hadir tepat waktu.",
                "Mahasiswa-mahasiswa diharapkan hadir tepat waktu."
            ],
            correct: 1,
            explanation: "Kalimat efektif harus ringkas dan tidak berlebihan. Penggunaan 'bagi' pada awal kalimat seringkali redundan."
        },
        {
            question: "Kata 'memperhatikan' terbentuk dari imbuhan...",
            options: [
                "me- + per- + hati + -kan",
                "mem- + per- + hati + -kan",
                "me- + perhati + -kan",
                "mem- + hati + -kan"
            ],
            correct: 0,
            explanation: "Kata dasar 'hati' mendapat imbuhan 'memper-' dan '-kan'."
        },
        {
            question: "Identifikasi jenis kalimat berdasarkan fungsinya: 'Tolong ambilkan buku itu!'",
            options: [
                "Kalimat berita",
                "Kalimat tanya",
                "Kalimat perintah",
                "Kalimat seru"
            ],
            correct: 2,
            explanation: "Kalimat ini menyatakan suatu permintaan atau suruhan, sehingga termasuk kalimat perintah."
        },
        {
            question: "Manakah yang merupakan frasa verbal?",
            options: [
                "Rumah besar",
                "Sedang makan",
                "Sangat cepat",
                "Di pasar"
            ],
            correct: 1,
            explanation: "Frasa verbal adalah kelompok kata yang intinya adalah kata kerja, seperti 'sedang makan'."
        },
        {
            question: "Pilihlah kalimat yang menggunakan tanda baca koma dengan benar.",
            options: [
                "Saya suka apel, jeruk dan pisang.",
                "Saya suka apel, jeruk, dan pisang.",
                "Saya suka apel jeruk, dan pisang.",
                "Saya suka apel; jeruk; dan pisang."
            ],
            correct: 1,
            explanation: "Tanda koma digunakan untuk memisahkan unsur-unsur dalam suatu perincian yang lebih dari dua."
        },
        {
            question: "Kata 'karena' termasuk jenis konjungsi...",
            options: [
                "Koordinatif",
                "Subordinatif",
                "Antarkalimat",
                "Intrakalimat"
            ],
            correct: 1,
            explanation: "'Karena' adalah konjungsi subordinatif yang menghubungkan klausa bawahan dengan klausa utama untuk menyatakan sebab-akibat."
        },
        {
            question: "Manakah yang merupakan kalimat pasif yang benar?",
            options: [
                "Ayah sedang memperbaiki mobil.",
                "Mobil sedang diperbaiki oleh Ayah.",
                "Ayah memperbaiki mobil.",
                "Mobil diperbaiki Ayah."
            ],
            correct: 1,
            explanation: "Kalimat pasif memiliki subjek yang dikenai tindakan, ditandai dengan awalan 'di-' pada predikat dan sering diikuti 'oleh'."
        },
        {
            question: "Kata 'di' sebagai preposisi (kata depan) harus ditulis...",
            options: [
                "Digabung dengan kata berikutnya",
                "Dipisah dengan kata berikutnya",
                "Bisa digabung atau dipisah",
                "Selalu diawali huruf kapital"
            ],
            correct: 1,
            explanation: "Kata depan 'di' yang menunjukkan tempat harus ditulis terpisah dari kata yang mengikutinya (misalnya 'di rumah', 'di sekolah')."
        },
        {
            question: "Pilihlah kalimat yang mengandung majas personifikasi.",
            options: [
                "Wajahnya seindah rembulan.",
                "Angin berbisik di telingaku.",
                "Dia adalah singa di medan perang.",
                "Hatinya sekeras batu."
            ],
            correct: 1,
            explanation: "Personifikasi adalah majas yang memberikan sifat-sifat manusia kepada benda mati atau makhluk hidup non-manusia, seperti 'angin berbisik'."
        }
    ],
    'kosa-kata': [
        {
            question: "Apa sinonim dari kata 'komitmen'?",
            options: [
                "Janji",
                "Tujuan",
                "Keputusan",
                "Kesepakatan"
            ],
            correct: 0,
            explanation: "Sinonim 'komitmen' adalah 'janji' atau 'ikrar'."
        },
        {
            question: "Antonim dari kata 'optimis' adalah...",
            options: [
                "Pesimis",
                "Realistis",
                "Idealis",
                "Pragmatis"
            ],
            correct: 0,
            explanation: "Antonim 'optimis' adalah 'pesimis', yang berarti cenderung melihat hal buruk."
        },
        {
            question: "Kata 'inovasi' berarti...",
            options: [
                "Penemuan baru",
                "Perbaikan",
                "Pengembangan",
                "Penciptaan"
            ],
            correct: 0,
            explanation: "Inovasi adalah penemuan baru yang berbeda dari yang sudah ada atau yang sudah dikenal sebelumnya."
        },
        {
            question: "Pilihlah kata yang memiliki makna konotatif positif.",
            options: [
                "Kambing hitam",
                "Bunga desa",
                "Buaya darat",
                "Tangan kanan"
            ],
            correct: 1,
            explanation: "'Bunga desa' memiliki konotasi positif yang berarti gadis tercantik di desa."
        },
        {
            question: "Apa arti dari idiom 'gulung tikar'?",
            options: [
                "Berpindah tempat",
                "Bangkrut",
                "Berhenti bekerja",
                "Menyimpan barang"
            ],
            correct: 1,
            explanation: "Idiom 'gulung tikar' berarti mengalami kebangkrutan atau kerugian besar dalam usaha."
        },
        {
            question: "Sinonim dari kata 'eskalasi' adalah...",
            options: [
                "Penurunan",
                "Peningkatan",
                "Perataan",
                "Pengurangan"
            ],
            correct: 1,
            explanation: "Eskalasi berarti peningkatan atau pertambahan secara bertahap."
        },
        {
            question: "Antonim dari kata 'fleksibel' adalah...",
            options: [
                "Luwes",
                "Kaku",
                "Mudah",
                "Lentur"
            ],
            correct: 1,
            explanation: "Antonim 'fleksibel' adalah 'kaku', yang berarti tidak mudah berubah atau disesuaikan."
        },
        {
            question: "Kata 'paradigma' merujuk pada...",
            options: [
                "Kesimpulan",
                "Pandangan dasar",
                "Perdebatan",
                "Penemuan"
            ],
            correct: 1,
            explanation: "Paradigma adalah kerangka berpikir atau pandangan dasar yang digunakan untuk memahami dunia."
        },
        {
            question: "Pilihlah kata serapan yang berasal dari bahasa Inggris.",
            options: [
                "Meja",
                "Jendela",
                "Komputer",
                "Kursi"
            ],
            correct: 2,
            explanation: "'Komputer' adalah kata serapan dari bahasa Inggris 'computer'."
        },
        {
            question: "Apa makna dari peribahasa 'Air susu dibalas air tuba'?",
            options: [
                "Kebaikan dibalas kebaikan",
                "Kebaikan dibalas kejahatan",
                "Kejahatan dibalas kebaikan",
                "Kejahatan dibalas kejahatan"
            ],
            correct: 1,
            explanation: "Peribahasa ini berarti kebaikan yang diberikan dibalas dengan kejahatan."
        }
    ],
    'ejaan': [
        {
            question: "Manakah penulisan gelar yang benar?",
            options: [
                "Dr. Ir. Budi Santoso, M.Sc.",
                "Dr Ir Budi Santoso, M.Sc",
                "dr. ir. Budi Santoso, m.sc.",
                "DR. IR. BUDI SANTOSO, M.SC."
            ],
            correct: 0,
            explanation: "Gelar ditulis dengan huruf kapital di awal setiap singkatan dan diakhiri dengan tanda titik, serta dipisahkan dengan koma jika ada lebih dari satu gelar."
        },
        {
            question: "Pilihlah kalimat yang menggunakan huruf kapital dengan benar.",
            options: [
                "Saya lahir di bulan Januari.",
                "Saya lahir di Bulan Januari.",
                "saya lahir di bulan januari.",
                "Saya lahir di bulan januari."
            ],
            correct: 0,
            explanation: "Nama bulan ditulis dengan huruf kapital."
        },
        {
            question: "Manakah penulisan kata ulang yang benar?",
            options: [
                "Anak anak",
                "Anak-anak",
                "Anak2",
                "Anak-Anak"
            ],
            correct: 1,
            explanation: "Kata ulang ditulis dengan tanda hubung di antara unsur-unsurnya."
        },
        {
            question: "Pilihlah penulisan bilangan yang benar dalam kalimat.",
            options: [
                "Ada 50 siswa di kelas itu.",
                "Ada lima puluh siswa di kelas itu.",
                "Ada lima puluh (50) siswa di kelas itu.",
                "Ada 50 (lima puluh) siswa di kelas itu."
            ],
            correct: 1,
            explanation: "Bilangan yang dapat dinyatakan dengan satu atau dua kata sebaiknya ditulis dengan huruf dalam teks."
        },
        {
            question: "Manakah penggunaan tanda petik dua ('...') yang benar?",
            options: [
                "Dia bertanya, 'Kapan kamu pulang?'",
                "Dia bertanya, 'Kapan kamu pulang?'",
                "Dia bertanya: 'Kapan kamu pulang?'",
                "Dia bertanya, Kapan kamu pulang?"
            ],
            correct: 1,
            explanation: "Tanda petik dua digunakan untuk mengapit petikan langsung, dan tanda baca penutup kalimat diletakkan di dalam tanda petik."
        },
        {
            question: "Pilihlah penulisan kata depan 'ke' yang benar.",
            options: [
                "Saya pergi kesekolah.",
                "Saya pergi ke sekolah.",
                "Saya pergi keSekolah.",
                "Saya pergi Ke sekolah."
            ],
            correct: 1,
            explanation: "Kata depan 'ke' yang menunjukkan arah atau tujuan ditulis terpisah dari kata yang mengikutinya."
        },
        {
            question: "Manakah penulisan singkatan nama lembaga yang benar?",
            options: [
                "P.T. Jaya Abadi",
                "PT. Jaya Abadi",
                "PT Jaya Abadi",
                "P.T Jaya Abadi"
            ],
            correct: 2,
            explanation: "Singkatan nama lembaga seperti PT, CV, dll., tidak diikuti tanda titik."
        },
        {
            question: "Pilihlah kalimat yang menggunakan tanda titik koma (;) dengan benar.",
            options: [
                "Ayah membaca koran; Ibu memasak; Adik bermain.",
                "Ayah membaca koran, Ibu memasak, Adik bermain.",
                "Ayah membaca koran: Ibu memasak: Adik bermain.",
                "Ayah membaca koran. Ibu memasak. Adik bermain."
            ],
            correct: 0,
            explanation: "Tanda titik koma digunakan untuk memisahkan bagian-bagian kalimat yang sejenis dan setara."
        },
        {
            question: "Manakah penulisan kata 'maha' yang benar?",
            options: [
                "Mahakuasa",
                "Maha Kuasa",
                "Maha-Kuasa",
                "maha kuasa"
            ],
            correct: 0,
            explanation: "Kata 'maha' sebagai unsur gabungan kata ditulis serangkai dengan kata dasar yang mengikutinya, kecuali jika diikuti kata berimbuhan atau nama diri."
        },
        {
            question: "Pilihlah penulisan tanggal yang benar.",
            options: [
                "Jakarta, 17 Agustus 1945",
                "Jakarta 17 Agustus 1945",
                "Jakarta, 17 Agustus, 1945",
                "Jakarta; 17 Agustus 1945"
            ],
            correct: 0,
            explanation: "Nama kota dan tanggal dipisahkan dengan tanda koma."
        }
    ],
    'sastra': [
        {
            question: "Siapakah tokoh utama dalam novel 'Siti Nurbaya'?",
            options: [
                "Sutan Mahmud",
                "Datuk Maringgih",
                "Siti Nurbaya",
                "Samsulbahri"
            ],
            correct: 2,
            explanation: "Siti Nurbaya adalah tokoh sentral dalam novel klasik karya Marah Rusli."
        },
        {
            question: "Apa yang dimaksud dengan 'amanat' dalam karya sastra?",
            options: [
                "Jalan cerita",
                "Pesan moral",
                "Latar tempat",
                "Tokoh utama"
            ],
            correct: 1,
            explanation: "Amanat adalah pesan moral atau pelajaran yang ingin disampaikan pengarang kepada pembaca."
        },
        {
            question: "Pilihlah jenis puisi lama yang setiap baitnya terdiri atas empat baris, bersajak a-b-a-b, dan berisi nasihat atau ajaran.",
            options: [
                "Syair",
                "Pantun",
                "Gurindam",
                "Seloka"
            ],
            correct: 1,
            explanation: "Ciri-ciri tersebut sesuai dengan definisi pantun."
        },
        {
            question: "Siapakah penulis kumpulan cerpen 'Robohnya Surau Kami'?",
            options: [
                "A.A. Navis",
                "Putu Wijaya",
                "Seno Gumira Ajidarma",
                "Danarto"
            ],
            correct: 0,
            explanation: "'Robohnya Surau Kami' adalah salah satu karya terkenal A.A. Navis."
        },
        {
            question: "Apa yang menjadi ciri khas drama tradisional 'Lenong'?",
            options: [
                "Menggunakan bahasa baku",
                "Diiringi musik gamelan",
                "Seringkali improvisasi dan humor",
                "Cerita tentang kerajaan"
            ],
            correct: 2,
            explanation: "Lenong, drama rakyat Betawi, dikenal dengan improvisasi dan unsur humornya."
        },
        {
            question: "Majas yang membandingkan dua hal yang berbeda seolah-olah sama tanpa menggunakan kata 'seperti' atau 'bagai' disebut...",
            options: [
                "Simile",
                "Metafora",
                "Personifikasi",
                "Hiperbola"
            ],
            correct: 1,
            explanation: "Metafora adalah majas perbandingan langsung, misalnya 'raja siang' untuk matahari."
        },
        {
            question: "Siapakah sastrawan yang dikenal dengan julukan 'Si Binatang Jalang'?",
            options: [
                "W.S. Rendra",
                "Chairil Anwar",
                "Sapardi Djoko Damono",
                "Pramoedya Ananta Toer"
            ],
            correct: 1,
            explanation: "Chairil Anwar adalah penyair terkemuka Angkatan '45 yang dijuluki 'Si Binatang Jalang'."
        },
        {
            question: "Unsur intrinsik yang berkaitan dengan urutan peristiwa dalam cerita adalah...",
            options: [
                "Tema",
                "Latar",
                "Alur",
                "Tokoh"
            ],
            correct: 2,
            explanation: "Alur atau plot adalah rangkaian peristiwa yang membentuk cerita."
        },
        {
            question: "Novel 'Tenggelamnya Kapal Van der Wijck' ditulis oleh...",
            options: [
                "Andrea Hirata",
                "Hamka",
                "Tere Liye",
                "Pramoedya Ananta Toer"
            ],
            correct: 1,
            explanation: "Novel romantis tragis ini adalah karya monumental Buya Hamka."
        },
        {
            question: "Apa perbedaan utama antara cerpen dan novel?",
            options: [
                "Cerpen lebih panjang dari novel.",
                "Novel memiliki alur yang lebih sederhana.",
                "Cerpen memiliki jumlah kata yang lebih sedikit dan fokus pada satu konflik.",
                "Novel selalu memiliki akhir yang bahagia."
            ],
            correct: 2,
            explanation: "Cerpen lebih singkat, fokus pada satu peristiwa atau konflik, sedangkan novel lebih panjang dan kompleks."
        }
    ]
};

// Materi Data (New sections added)
const materiData = {
    'tata-bahasa': {
        title: 'Tata Bahasa Indonesia',
        content: `
            <h2>Tata Bahasa Indonesia</h2>
            <h3>1. Struktur Kalimat</h3>
            <p>Kalimat dalam bahasa Indonesia memiliki struktur dasar yang terdiri dari:</p>
            <ul>
                <li><strong>Subjek (S)</strong>: Pelaku atau yang dibicarakan</li>
                <li><strong>Predikat (P)</strong>: Kata kerja atau kata yang menyatakan keadaan</li>
                <li><strong>Objek (O)</strong>: Penerima tindakan (opsional)</li>
                <li><strong>Keterangan (K)</strong>: Informasi tambahan (opsional)</li>
            </ul>
            <p><em>Contoh: Adik (S) sedang membaca (P) buku (O) di kamar (K).</em></p>
            
            <h3>2. Jenis-jenis Kalimat</h3>
            <h4>a. Kalimat Tunggal</h4>
            <p>Kalimat yang hanya memiliki satu klausa.</p>
            <p><em>Contoh: Saya belajar.</em></p>
            
            <h4>b. Kalimat Majemuk</h4>
            <p>Kalimat yang terdiri dari dua atau lebih klausa.</p>
            <ul>
                <li><strong>Kalimat Majemuk Setara</strong>: Klausa-klausa yang setara (dihubungkan 'dan', 'atau', 'tetapi').<br><em>Contoh: Saya belajar dan dia bermain.</em></li>
                <li><strong>Kalimat Majemuk Bertingkat</strong>: Ada klausa utama dan klausa bawahan (dihubungkan 'ketika', 'jika', 'karena', 'supaya').<br><em>Contoh: Saya belajar supaya pintar.</em></li>
            </ul>
            
            <h3>3. Kata Kerja</h3>
            <h4>a. Kata Kerja Transitif</h4>
            <p>Kata kerja yang memerlukan objek.</p>
            <p><em>Contoh: Saya membaca buku.</em></p>
            
            <h4>b. Kata Kerja Intransitif</h4>
            <p>Kata kerja yang tidak memerlukan objek.</p>
            <p><em>Contoh: Saya berlari.</em></p>
            
            <h3>4. Kalimat Aktif dan Pasif</h3>
            <h4>a. Kalimat Aktif</h4>
            <p>Subjek melakukan tindakan.</p>
            <p><em>Contoh: Saya menulis surat.</em></p>
            
            <h4>b. Kalimat Pasif</h4>
            <p>Subjek dikenai tindakan.</p>
            <p><em>Contoh: Surat ditulis oleh saya.</em></p>
        `
    },
    'kosa-kata': {
        title: 'Kosa Kata Bahasa Indonesia',
        content: `
            <h2>Kosa Kata Bahasa Indonesia</h2>
            <h3>1. Sinonim</h3>
            <p>Kata-kata yang memiliki makna yang sama atau hampir sama.</p>
            <ul>
                <li>cantik = indah = elok</li>
                <li>besar = agung = raksasa</li>
                <li>cepat = laju = kilat</li>
                <li>senang = gembira = bahagia</li>
            </ul>
            
            <h3>2. Antonim</h3>
            <p>Kata-kata yang memiliki makna berlawanan.</p>
            <ul>
                <li>besar ↔ kecil</li>
                <li>tinggi ↔ rendah</li>
                <li>panas ↔ dingin</li>
                <li>terang ↔ gelap</li>
            </ul>
            
            <h3>3. Homonim, Homofon, Homograf</h3>
            <ul>
                <li><strong>Homonim</strong>: Ejaan dan pelafalan sama, makna beda (misal: <em>bulan</em> - satelit vs nama waktu).</li>
                <li><strong>Homofon</strong>: Pelafalan sama, ejaan dan makna beda (misal: <em>bank</em> vs <em>bang</em>).</li>
                <li><strong>Homograf</strong>: Ejaan sama, pelafalan dan makna beda (misal: <em>apel</em> - buah vs upacara).</li>
            </ul>
            
            <h3>4. Idiom dan Peribahasa</h3>
            <ul>
                <li><strong>Idiom</strong>: Ungkapan yang maknanya tidak dapat diartikan secara harfiah (misal: <em>gulung tikar</em> = bangkrut).</li>
                <li><strong>Peribahasa</strong>: Ungkapan atau kalimat ringkas padat berisi perbandingan, nasihat, atau prinsip hidup (misal: <em>air susu dibalas air tuba</em> = kebaikan dibalas kejahatan).</li>
            </ul>
            
            <h3>5. Kata Serapan</h3>
            <p>Kata-kata yang diambil dari bahasa lain dan disesuaikan dengan bahasa Indonesia.</p>
            <ul>
                <li>Dari bahasa Arab: kitab, ilmu, adab</li>
                <li>Dari bahasa Sanskerta: bahasa, budaya, negara</li>
                <li>Dari bahasa Belanda: kantor, sekolah, rumah</li>
                <li>Dari bahasa Inggris: komputer, internet, email</li>
            </ul>
        `
    },
    'ejaan': {
        title: 'Ejaan Bahasa Indonesia',
        content: `
            <h2>Ejaan Bahasa Indonesia</h2>
            <h3>1. Penggunaan Huruf Kapital</h3>
            <ul>
                <li>Huruf pertama pada awal kalimat</li>
                <li>Huruf pertama nama orang, gelar, dan jabatan</li>
                <li>Huruf pertama nama tempat, hari, bulan, dan tahun</li>
                <li>Huruf pertama kata ganti Tuhan</li>
            </ul>
            
            <h3>2. Tanda Baca</h3>
            <h4>a. Tanda Titik (.)</h4>
            <ul>
                <li>Di akhir kalimat berita</li>
                <li>Di belakang angka atau huruf dalam suatu perincian</li>
            </ul>
            
            <h4>b. Tanda Koma (,)</h4>
            <ul>
                <li>Memisahkan anak kalimat dari induk kalimat</li>
                <li>Memisahkan petikan langsung dari bagian lain</li>
                <li>Di antara nama dan alamat, bagian-bagian alamat, tempat dan tanggal</li>
            </ul>
            
            <h4>c. Tanda Tanya (?) dan Tanda Seru (!)</h4>
            <ul>
                <li>Di akhir kalimat tanya</li>
                <li>Di akhir kalimat seru atau perintah</li>
            </ul>
            
            <h3>3. Penulisan Kata</h3>
            <h4>a. Kata Dasar dan Berimbuhan</h4>
            <p>Ditulis sebagai satu kesatuan (misal: <em>rumah, belajar, mengajar</em>).</p>
            
            <h4>b. Kata Ulang</h4>
            <p>Ditulis dengan tanda hubung di antara unsur-unsurnya (misal: <em>rumah-rumah, anak-anak</em>).</p>
            
            <h4>c. Kata Depan (di, ke, dari)</h4>
            <p>Ditulis terpisah dari kata yang mengikutinya (misal: <em>di rumah, ke sekolah, dari pasar</em>).</p>
            
            <h3>4. Penulisan Angka dan Lambang Bilangan</h3>
            <ul>
                <li>Angka dipakai untuk menyatakan lambang bilangan atau nomor.</li>
                <li>Bilangan dalam teks yang dapat dinyatakan dengan satu atau dua kata ditulis dengan huruf (misal: <em>dua belas</em>, bukan <em>12</em>).</li>
                <li>Bilangan pada awal kalimat ditulis dengan huruf.</li>
            </ul>
        `
    },
    'sastra': {
        title: 'Sastra Indonesia',
        content: `
            <h2>Sastra Indonesia</h2>
            <h3>1. Pengertian Sastra</h3>
            <p>Sastra adalah karya seni yang menggunakan bahasa sebagai mediumnya. Sastra Indonesia mencakup berbagai bentuk karya sastra yang ditulis dalam bahasa Indonesia.</p>
            
            <h3>2. Jenis-jenis Karya Sastra</h3>
            <h4>a. Puisi</h4>
            <p>Karya sastra yang ditulis dalam bentuk bait dengan rima dan irama tertentu.</p>
            <ul>
                <li><strong>Puisi Lama</strong>: pantun, syair, gurindam</li>
                <li><strong>Puisi Baru</strong>: soneta, balada, ode</li>
                <li><strong>Puisi Modern</strong>: puisi bebas, puisi konkret</li>
            </ul>
            
            <h4>b. Prosa</h4>
            <p>Karya sastra yang ditulis dalam bentuk cerita atau narasi.</p>
            <ul>
                <li><strong>Cerpen</strong>: cerita pendek, fokus pada satu konflik.</li>
                <li><strong>Novel</strong>: cerita panjang, alur kompleks, banyak tokoh.</li>
                <li><strong>Roman</strong>: mirip novel, seringkali lebih fokus pada perkembangan karakter.</li>
            </ul>
            
            <h4>c. Drama</h4>
            <p>Karya sastra yang ditulis dalam bentuk dialog dan dimaksudkan untuk dipentaskan.</p>
            
            <h3>3. Unsur-unsur Sastra</h3>
            <ul>
                <li><strong>Tema</strong>: Ide pokok atau gagasan utama.</li>
                <li><strong>Alur/Plot</strong>: Rangkaian peristiwa dalam cerita.</li>
                <li><strong>Tokoh & Penokohan</strong>: Pelaku dan karakterisasi mereka.</li>
                <li><strong>Latar</strong>: Waktu, tempat, dan suasana.</li>
                <li><strong>Sudut Pandang</strong>: Posisi pencerita.</li>
                <li><strong>Amanat</strong>: Pesan moral.</li>
                <li><strong>Gaya Bahasa/Majas</strong>: Cara pengarang menggunakan bahasa (misal: metafora, simile, personifikasi).</li>
            </ul>
        `
    },
    'menulis': {
        title: 'Menulis Kreatif',
        content: `
            <h2>Menulis Kreatif</h2>
            <h3>1. Pengertian Menulis Kreatif</h3>
            <p>Menulis kreatif adalah seni mengungkapkan ide, emosi, dan imajinasi melalui tulisan dengan cara yang orisinal dan menarik. Ini melibatkan penggunaan gaya bahasa yang kaya, pengembangan karakter yang kuat, dan penciptaan alur cerita yang memikat.</p>
            
            <h3>2. Jenis-jenis Tulisan Kreatif</h3>
            <ul>
                <li><strong>Cerpen (Cerita Pendek)</strong>: Narasi fiksi singkat yang fokus pada satu peristiwa atau konflik.</li>
                <li><strong>Puisi</strong>: Ekspresi emosi dan ide melalui bahasa yang ritmis dan figuratif.</li>
                <li><strong>Esai Pribadi</strong>: Tulisan non-fiksi yang mengeksplorasi pengalaman atau pandangan pribadi penulis.</li>
                <li><strong>Naskah Drama/Skenario</strong>: Tulisan yang dirancang untuk dipentaskan atau difilmkan, berfokus pada dialog dan aksi.</li>
                <li><strong>Fiksi Mini/Flash Fiction</strong>: Cerita yang sangat singkat, seringkali kurang dari 1000 kata.</li>
            </ul>
            
            <h3>3. Tips Menulis Kreatif</h3>
            <ul>
                <li><strong>Mulai Menulis</strong>: Jangan takut dengan halaman kosong. Mulailah dengan ide apa pun yang muncul.</li>
                <li><strong>Baca Banyak</strong>: Membaca berbagai genre akan memperkaya kosa kata dan gaya penulisan Anda.</li>
                <li><strong>Observasi</strong>: Perhatikan detail di sekitar Anda, orang, tempat, dan percakapan. Ini bisa menjadi inspirasi.</li>
                <li><strong>Kembangkan Karakter</strong>: Buat karakter yang kompleks dan realistis dengan motivasi dan kelemahan.</li>
                <li><strong>Gunakan Panca Indra</strong>: Deskripsikan dengan detail yang melibatkan penglihatan, pendengaran, penciuman, perasa, dan peraba.</li>
                <li><strong>Revisi dan Edit</strong>: Proses menulis tidak berhenti setelah draf pertama. Perbaiki struktur, gaya, dan ejaan.</li>
                <li><strong>Dapatkan Umpan Balik</strong>: Mintalah orang lain membaca tulisan Anda untuk mendapatkan perspektif baru.</li>
            </ul>
        `
    },
    'berbicara': {
        title: 'Berbicara Efektif',
        content: `
            <h2>Berbicara Efektif</h2>
            <h3>1. Pengertian Berbicara Efektif</h3>
            <p>Berbicara efektif adalah kemampuan untuk menyampaikan pesan dengan jelas, ringkas, dan meyakinkan kepada audiens, sehingga pesan tersebut dapat dipahami dan mencapai tujuan komunikasi yang diinginkan.</p>
            
            <h3>2. Komponen Berbicara Efektif</h3>
            <ul>
                <li><strong>Kejelasan (Clarity)</strong>: Pesan disampaikan dengan bahasa yang mudah dimengerti, tanpa ambiguitas.</li>
                <li><strong>Keringkasan (Conciseness)</strong>: Menyampaikan inti pesan tanpa informasi yang tidak perlu.</li>
                <li><strong>Kredibilitas (Credibility)</strong>: Pembicara dianggap dapat dipercaya dan memiliki pengetahuan tentang topik.</li>
                <li><strong>Kesesuaian (Context)</strong>: Pesan disesuaikan dengan audiens dan situasi.</li>
                <li><strong>Kontak Mata (Eye Contact)</strong>: Membangun koneksi dengan audiens.</li>
                <li><strong>Bahasa Tubuh (Body Language)</strong>: Gerakan dan ekspresi yang mendukung pesan.</li>
                <li><strong>Intonasi dan Volume Suara</strong>: Menggunakan variasi suara untuk menjaga perhatian dan menekankan poin penting.</li>
            </ul>
            
            <h3>3. Tips Meningkatkan Kemampuan Berbicara</h3>
            <ul>
                <li><strong>Persiapan Matang</strong>: Pahami topik Anda secara mendalam, susun poin-poin utama, dan siapkan contoh atau ilustrasi.</li>
                <li><strong>Latihan Berulang</strong>: Berlatih di depan cermin, rekam diri Anda, atau berlatih di depan teman.</li>
                <li><strong>Struktur yang Jelas</strong>: Mulai dengan pembukaan yang menarik, kembangkan isi dengan argumen yang logis, dan akhiri dengan kesimpulan yang kuat.</li>
                <li><strong>Kendalikan Gugup</strong>: Tarik napas dalam-dalam, fokus pada pesan Anda, dan ingat bahwa audiens ingin Anda berhasil.</li>
                <li><strong>Interaksi dengan Audiens</strong>: Ajukan pertanyaan retoris, libatkan audiens, dan perhatikan reaksi mereka.</li>
                <li><strong>Gunakan Alat Bantu Visual</strong>: Slide presentasi atau gambar dapat membantu memperjelas pesan Anda.</li>
                <li><strong>Minta Umpan Balik</strong>: Setelah berbicara, mintalah masukan konstruktif untuk perbaikan di masa mendatang.</li>
            </ul>
        `
    }
};

// Essay Prompts
const essayPrompts = {
    'pendidikan': [
        {
            prompt: "Bagaimana peran teknologi dalam meningkatkan kualitas pendidikan di Indonesia? Jelaskan dampak positif dan negatifnya, serta berikan solusi untuk memaksimalkan potensi positifnya.",
            keywords: ["teknologi", "pendidikan", "dampak positif", "dampak negatif", "solusi"]
        },
        {
            prompt: "Diskusikan pentingnya pendidikan karakter dalam kurikulum sekolah. Mengapa pendidikan karakter perlu ditekankan, dan bagaimana cara efektif untuk mengimplementasikannya?",
            keywords: ["pendidikan karakter", "kurikulum", "pentingnya", "implementasi"]
        },
        {
            prompt: "Analisislah tantangan yang dihadapi guru di era digital saat ini dan bagaimana mereka dapat beradaptasi untuk tetap relevan dalam proses pembelajaran.",
            keywords: ["tantangan guru", "era digital", "adaptasi", "pembelajaran"]
        },
        {
            prompt: "Jelaskan mengapa akses pendidikan yang merata masih menjadi masalah di Indonesia dan usulkan langkah-langkah konkret untuk mengatasi kesenjangan tersebut.",
            keywords: ["akses pendidikan", "kesenjangan", "masalah", "solusi"]
        }
    ],
    'lingkungan': [
        {
            prompt: "Perubahan iklim adalah isu global yang mendesak. Jelaskan penyebab utama perubahan iklim, dampaknya terhadap Indonesia, dan peran individu serta pemerintah dalam mitigasi dan adaptasinya.",
            keywords: ["perubahan iklim", "penyebab", "dampak", "mitigasi", "adaptasi", "peran individu", "peran pemerintah"]
        },
        {
            prompt: "Diskusikan pentingnya pengelolaan sampah yang berkelanjutan di perkotaan. Apa saja metode pengelolaan sampah yang efektif, dan bagaimana masyarakat dapat berpartisipasi aktif?",
            keywords: ["pengelolaan sampah", "berkelanjutan", "metode efektif", "partisipasi masyarakat"]
        },
        {
            prompt: "Analisislah dampak deforestasi terhadap keanekaragaman hayati dan ekosistem di Indonesia. Apa upaya yang dapat dilakukan untuk mencegah dan merehabilitasi hutan?",
            keywords: ["deforestasi", "keanekaragaman hayati", "ekosistem", "pencegahan", "rehabilitasi hutan"]
        },
        {
            prompt: "Jelaskan konsep energi terbarukan dan mengapa Indonesia perlu beralih dari energi fosil. Berikan contoh sumber energi terbarukan yang potensial di Indonesia.",
            keywords: ["energi terbarukan", "energi fosil", "potensi Indonesia", "contoh"]
        }
    ],
    'teknologi': [
        {
            prompt: "Bagaimana kecerdasan buatan (AI) mengubah berbagai aspek kehidupan manusia? Jelaskan potensi positif dan risiko yang mungkin timbul dari perkembangan AI.",
            keywords: ["kecerdasan buatan", "AI", "dampak positif", "risiko", "perkembangan AI"]
        },
        {
            prompt: "Diskusikan etika penggunaan media sosial di kalangan remaja. Bagaimana media sosial memengaruhi interaksi sosial dan kesehatan mental, serta bagaimana cara menggunakannya secara bijak?",
            keywords: ["etika media sosial", "remaja", "interaksi sosial", "kesehatan mental", "penggunaan bijak"]
        },
        {
            prompt: "Analisislah peran e-commerce dalam perekonomian Indonesia. Apa keuntungan dan tantangan yang dihadapi pelaku usaha dan konsumen dalam ekosistem e-commerce?",
            keywords: ["e-commerce", "perekonomian Indonesia", "keuntungan", "tantangan", "pelaku usaha", "konsumen"]
        },
        {
            prompt: "Jelaskan konsep keamanan siber dan mengapa hal itu sangat penting di era digital. Berikan tips praktis untuk menjaga keamanan data pribadi di internet.",
            keywords: ["keamanan siber", "era digital", "pentingnya", "tips praktis", "data pribadi"]
        }
    ],
    'sosial': [
        {
            prompt: "Bagaimana globalisasi memengaruhi identitas budaya lokal di Indonesia? Jelaskan dampak positif dan negatifnya, serta upaya yang dapat dilakukan untuk melestarikan budaya lokal.",
            keywords: ["globalisasi", "identitas budaya", "budaya lokal", "dampak positif", "dampak negatif", "pelestarian"]
        },
        {
            prompt: "Diskusikan pentingnya toleransi dan kerukunan antarumat beragama di Indonesia. Bagaimana nilai-nilai ini dapat diperkuat dalam masyarakat majemuk?",
            keywords: ["toleransi", "kerukunan", "antarumat beragama", "masyarakat majemuk", "penguatan nilai"]
        },
        {
            prompt: "Analisislah peran pemuda dalam pembangunan nasional. Kontribusi apa saja yang dapat diberikan pemuda untuk kemajuan bangsa?",
            keywords: ["peran pemuda", "pembangunan nasional", "kontribusi pemuda", "kemajuan bangsa"]
        },
        {
            prompt: "Jelaskan mengapa kesetaraan gender masih menjadi isu penting di Indonesia dan berikan contoh upaya yang telah dilakukan untuk mencapai kesetaraan tersebut.",
            keywords: ["kesetaraan gender", "isu penting", "upaya", "contoh"]
        }
    ]
};


// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    setupScrollAnimations();
    setupQuizCategories();
    setupEssayCategories(); // Setup essay categories
    setupMobileMenu();
    loadQuizData();
    loadEssayPrompt(); // Load initial essay prompt
}

// Navigation Functions
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.materi-card, .feature, .quiz-container, .essay-container').forEach(el => {
        observer.observe(el);
    });
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Quiz Functions
function setupQuizCategories() {
    const categoryButtons = document.querySelectorAll('.quiz-category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentQuizCategory = this.getAttribute('data-category');
            resetQuiz();
            loadQuizData();
        });
    });
}

function loadQuizData() {
    quizData = quizQuestions[currentQuizCategory];
    if (quizData && quizData.length > 0) {
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
        updateProgress();
    } else {
        document.getElementById('quiz-question').innerHTML = "<p>Tidak ada soal untuk kategori ini.</p>";
        document.getElementById('quiz-options').innerHTML = "";
        document.getElementById('next-btn').disabled = true;
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('progress-fill').style.width = '0%';
        document.getElementById('progress-text').textContent = '0/0';
    }
}

function displayQuestion() {
    if (!quizData || currentQuestionIndex >= quizData.length) {
        showQuizResults();
        return;
    }
    
    const question = quizData[currentQuestionIndex];
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    
    questionElement.innerHTML = `<p>${question.question}</p>`;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.innerHTML = option;
        optionElement.addEventListener('click', function() {
            selectAnswer(index);
        });
        optionsElement.appendChild(optionElement);
    });
    
    document.getElementById('next-btn').disabled = true;
    document.getElementById('submit-btn').disabled = true;
    selectedAnswer = null;
}

function selectAnswer(answerIndex) {
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
        option.classList.remove('correct');
        option.classList.remove('incorrect');
    });
    
    document.querySelectorAll('.quiz-option')[answerIndex].classList.add('selected');
    
    selectedAnswer = answerIndex;
    
    document.getElementById('next-btn').disabled = false;
    
    if (currentQuestionIndex === quizData.length - 1) {
        document.getElementById('submit-btn').disabled = false;
    }
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    const question = quizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        score++;
    }
    
    showAnswerFeedback(question.correct, isCorrect);
    
    setTimeout(() => {
        currentQuestionIndex++;
        updateProgress();
        
        if (currentQuestionIndex < quizData.length) {
            displayQuestion();
        } else {
            showQuizResults();
        }
    }, 2000);
}

function showAnswerFeedback(correctIndex, isCorrect) {
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    const question = quizData[currentQuestionIndex];
    let explanationElement = document.querySelector('.explanation');
    if (!explanationElement) {
        explanationElement = document.createElement('div');
        explanationElement.className = 'explanation';
        document.getElementById('quiz-options').appendChild(explanationElement);
    }
    explanationElement.innerHTML = `<p><strong>Penjelasan:</strong> ${question.explanation}</p>`;
    explanationElement.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: rgba(6, 215, 160, 0.1);
        border-left: 4px solid var(--accent-color);
        border-radius: 5px;
        color: var(--text-dark);
    `;
}

function showQuizResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const controlsElement = document.querySelector('.quiz-controls');
    
    let message = '';
    let color = '';
    
    if (percentage >= 80) {
        message = 'Sangat Bagus!';
        color = 'var(--accent-color)';
    } else if (percentage >= 60) {
        message = 'Bagus!';
        color = 'var(--secondary-color)';
    } else if (percentage >= 40) {
        message = 'Cukup Baik';
        color = 'var(--primary-color)';
    } else {
        message = 'Perlu Belajar Lagi';
        color = 'var(--primary-color)';
    }
    
    questionElement.innerHTML = `
        <h3 style="color: ${color}; margin-bottom: 20px;">${message}</h3>
        <p>Skor Anda: <strong>${score}/${quizData.length}</strong> (${percentage}%)</p>
    `;
    
    optionsElement.innerHTML = '';
    
    controlsElement.innerHTML = `
        <button class="btn btn-primary" onclick="resetQuiz()">
            <i class="fas fa-redo"></i>
            Coba Lagi
        </button>
        <button class="btn btn-secondary" onclick="changeQuizCategory()">
            <i class="fas fa-exchange-alt"></i>
            Ganti Kategori
        </button>
    `;
    
    document.getElementById('progress-fill').style.width = '100%';
    document.getElementById('progress-text').textContent = `${quizData.length}/${quizData.length}`;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    loadQuizData();
    
    const controlsElement = document.querySelector('.quiz-controls');
    controlsElement.innerHTML = `
        <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()" disabled>Selanjutnya</button>
        <button class="btn btn-secondary" id="submit-btn" onclick="submitQuiz()" disabled>Selesai</button>
    `;
}

function changeQuizCategory() {
    document.querySelectorAll('.quiz-category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="tata-bahasa"]').classList.add('active');
    currentQuizCategory = 'tata-bahasa';
    resetQuiz();
}

function submitQuiz() {
    nextQuestion();
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
}

// Essay Functions
function setupEssayCategories() {
    const categoryButtons = document.querySelectorAll('.essay-category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentEssayCategory = this.getAttribute('data-category');
            loadEssayPrompt();
            resetEssay();
        });
    });
}

function loadEssayPrompt() {
    const prompts = essayPrompts[currentEssayCategory];
    if (prompts && prompts.length > 0) {
        // Select a random prompt from the category
        const randomIndex = Math.floor(Math.random() * prompts.length);
        essayData = prompts[randomIndex];
        document.getElementById('essay-prompt').innerHTML = `<p><strong>Topik:</strong> ${essayData.prompt}</p>`;
    } else {
        document.getElementById('essay-prompt').innerHTML = "<p>Tidak ada topik esai untuk kategori ini.</p>";
    }
    document.getElementById('essay-feedback').innerHTML = ""; // Clear previous feedback
}

function submitEssay() {
    const essayText = document.getElementById('essay-textarea').value.trim();
    const feedbackElement = document.getElementById('essay-feedback');
    
    if (essayText.length < 100) { // Minimum word count for a meaningful essay
        feedbackElement.innerHTML = `
            <h4>Umpan Balik Esai</h4>
            <p style="color: var(--primary-color);">Esai Anda terlalu pendek. Mohon kembangkan lagi tulisan Anda (minimal 100 kata).</p>
        `;
        return;
    }

    // Simple feedback logic (can be expanded with more sophisticated NLP if backend is available)
    let feedback = "<h4>Umpan Balik Esai</h4>";
    let wordCount = essayText.split(/\s+/).filter(word => word.length > 0).length;
    feedback += `<p>Jumlah kata: <strong>${wordCount}</strong></p>`;

    // Check for keyword usage
    let keywordFound = false;
    let missingKeywords = [];
    if (essayData.keywords) {
        essayData.keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // Whole word, case-insensitive
            if (essayText.match(regex)) {
                keywordFound = true;
            } else {
                missingKeywords.push(keyword);
            }
        });
    }

    if (missingKeywords.length > 0) {
        feedback += `<p style="color: var(--primary-color);">Beberapa kata kunci yang disarankan belum ditemukan: <strong>${missingKeywords.join(', ')}</strong>. Coba masukkan kata kunci ini untuk memperkaya esai Anda.</p>`;
    } else if (essayData.keywords && essayData.keywords.length > 0) {
        feedback += `<p style="color: var(--accent-color);">Bagus! Anda telah menggunakan kata kunci yang relevan.</p>`;
    } else {
        feedback += `<p>Teruslah berlatih menulis! Perhatikan struktur, koherensi, dan penggunaan bahasa.</p>`;
    }

    // Basic structure check (very rudimentary)
    const paragraphs = essayText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    if (paragraphs.length < 3) {
        feedback += `<p style="color: var(--primary-color);">Esai Anda mungkin perlu dikembangkan menjadi beberapa paragraf (pendahuluan, isi, penutup) agar lebih terstruktur.</p>`;
    } else {
        feedback += `<p style="color: var(--accent-color);">Struktur paragraf cukup baik. Pastikan setiap paragraf memiliki ide pokok yang jelas.</p>`;
    }

    // Encourage elaboration
    if (wordCount < 300) {
        feedback += `<p>Coba kembangkan ide-ide Anda lebih lanjut dan berikan contoh atau argumen pendukung yang lebih banyak.</p>`;
    } else {
        feedback += `<p>Esai Anda cukup komprehensif. Pertahankan kedalaman analisis Anda!</p>`;
    }
    
    feedbackElement.innerHTML = feedback;
    feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetEssay() {
    document.getElementById('essay-textarea').value = '';
    document.getElementById('essay-feedback').innerHTML = '';
    loadEssayPrompt(); // Load a new prompt or the current one
}

// Materi Functions
function openMateri(materiType) {
    const modal = document.getElementById('materi-modal');
    const content = document.getElementById('materi-content');
    
    if (materiData[materiType]) {
        content.innerHTML = materiData[materiType].content;
        modal.style.display = 'block';
        
        content.scrollTop = 0;
    }
}

function closeMateri() {
    const modal = document.getElementById('materi-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('materi-modal');
    if (event.target === modal) {
        closeMateri();
    }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        }
    });
});

// Add typing animation to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = ''; // Clear content before typing
        let words = originalText.split(' ');
        let currentWordIndex = 0;

        function typeNextWord() {
            if (currentWordIndex < words.length) {
                let span = document.createElement('span');
                span.className = 'title-word';
                heroTitle.appendChild(span);
                typeWriter(span, words[currentWordIndex] + ' ', 150);
                currentWordIndex++;
                setTimeout(typeNextWord, words[currentWordIndex - 1].length * 150 + 200); // Delay based on word length
            }
        }
        typeNextWord();
    }
});


// Add hover effects to cards
document.querySelectorAll('.materi-card, .feature').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn, .card-btn, .quiz-option, .quiz-category-btn, .essay-category-btn').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            z-index: 1;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});