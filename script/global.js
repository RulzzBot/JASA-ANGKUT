// SERVICES JS

const services = [
    {
        title : "Pick Up L300",
        desc  : "Angkut Barang Besar aman & Rapi dengan pagar kanan kiri",
        feature : ["Muat Banyak", "Aman"],
        gambar : "img/Armada1_Compress.png" 
    },
    {
        title : "Jasa Pindahan",
        desc : "Pindahan rumah, kos, atau kantor tenaga yang profesional.",
        feature : ["Dalam Kota", "Cepat & Aman"],
    },
    {
        title : "Angkut Barang",
        desc : "Angkut bahan bangunan, hasil panen, atau barang usaha.",
        feature : ["Fleksible", "Harga Nego"],
    },
    {
        title : "Travel Mobil",
        desc : "Layanan antar jemput & perjalanan luar kota.",
        feature : ["Nyaman", "Driver Profesional"],
    }
]

const Container = document.getElementById("services");

services.forEach(item => {
    Container.innerHTML += `
    <div class="p-6 bg-white shadow-md rounded-xl">
        <div class="h-32 mb-4 bg-gray-200 rounded">
        <!--gambar disini-->
        <img src="${item.gambar}" alt="${item.title}" class="object-cover w-full h-full rounded float"/>
        </div>
        <h3 class="font-semibold">${item.title}</h3>
        <p class="text-sm text-gray-600 mt-2">${item.desc}</p>
        <ul class="mt-3 space-y-1 text-sm">
            ${item.feature.map(f => `<li>✔ ${f}</li>`).join("")}
        </ul>
        <a href="#" class="block py-2 px-4 mt-4 text-sm text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600">Pesan Via WA</a>
        </div>
    </div>
    `
})

// KEUNGGULAN JS

const keunggulan  = [
    {
        title: "Armada Aman & Dimodifikasi",
        icon : "fa-solid fa-truck-pickup",
        desc : "Armada kami di modifikasi khusus untuk angkut barang agar lebih aman dan nyaman.",
    },
    {
        title: "Driver Berpengalaman",
        icon : "fa-solid fa-user-tie",
        desc : "Supir sudah terbiasa Angut Barang Besar, Pindahan, dan perjalanan Jauh.",
    },
    {
        title: "Harga Transparan dan Nego",
        icon : "fa-solid fa-tags",
        desc : "Harga Jelas dari Awal, bisa disesuaikan dengan jarak & Muatan",
    },
    {
        title : "Cepat dan Tepat Waktu",
        icon  : "fa-solid fa-clock",
        desc : "Respon cepat Via WhatsApp, Proses pengangkutan Langsung Jalan.",
    },
]

const ContainerKeunggulan = document.getElementById("keunggulan");

keunggulan.forEach(unggul => {
    ContainerKeunggulan.innerHTML += `
    <div class="flex items-start gap-6 p-6 border rounded-xl">
        <i class="${unggul.icon} mt-2 text-3xl text-orange-500"></i>
        <div>
            <h3 class="font-semibold">${unggul.title}</h3>
            <p class="mt-2 text-sm text-gray-600">${unggul.desc}</p>
        </div>
    </div>`
})

// TESTIMONI JS

const testi = [
    {
        nama : "Yusdi Rohman",
        kota : "Demak",
        rating : "⭐⭐⭐⭐⭐",
        isi : "Pelayanan nya Oke Banget, Cepat dan juga Barang bawaan aman. Saya akan langganan disini.",
        desc : "Klien Pindahan Barang"
    },
    {
        nama : "Nana Rosiana",
        kota : "Demak",
        rating : "⭐⭐⭐⭐⭐",
        isi : "Driver dan kernet nya ramah-ramah dan juga asik,kerja nya juga profesional",
        desc : "Klien Angkut Barang"
    },
    {
        nama : "Nazrul Wijaya",
        kota : "Kudus",
        rating : "⭐⭐⭐⭐⭐",
        isi : "Pelayanan nya Oke Banget, Cepat dan juga Barang bawaan aman",
        desc : "Klien Jasa Pindahan"
    },
    {
        nama : "Siti Aminah",
        kota : "Jepara",
        rating : "⭐⭐⭐⭐⭐",
        isi : "Harga nya terjangkau, driver nya ramah dan tepat waktu",
        desc : "Klien Angkut Barang"
    }
]

const ContainerTesti = document.querySelector(".testi");

testi.forEach(t => {
    ContainerTesti.innerHTML += `
    <div class="min-w-full px-4">
        <div class="p-6 bg-white border rounded-xl shadow-xl">
            ${t.rating}
            <p class="mt-4 text-sm text-gray-700">${t.isi}</p>
            <div class="flex items-center mt-6 gap-4">
                <i class="text-4xl fa-solid fa-user-tie"></i>
                <div class="">
                    <p class="text-sm font-semibold">${t.nama}</p>
                    <p class="text-sm text-gray-600">${t.desc} -${t.kota}</p>
                </div>
            </div>
        </div>
    </div>`
})

// SLIDER JS

const slider = document.getElementById("slider");

let index = 0;

const totalSlide = testi.length;

let autoSlide = setInterval(nextSlide, 3000);

function nextSlide() {
    index = (index + 1) % totalSlide;
    updateSlide();
}

function prevSlide() {
    index = (index -1 + totalSlide) % totalSlide;
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// SWAP MOBILE
let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    clearInterval(autoSlide);
})

slider.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
    autoSlide = setInterval(nextSlide, 3000);
})

function handleSwipe() {
    const swipeDistance = startX - endX;
    if(swipeDistance > 50) {
        // Swipe Kiri
        nextSlide();
    } else if(swipeDistance < -50) {
        // Swipe Kanan
        prevSlide();
    }
}


