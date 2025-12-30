const services = [
    {
        title : "Pick Up L300",
        desc  : "Angkut Barang Besar aman & Rapi dengan pagar kanan kiri",
        feature : ["Muat Banyak", "Aman"],
        // gambar : 
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
        // gambar disini
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