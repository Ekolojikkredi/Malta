// Atık Sayacı ve Geçmiş Yönetimi
let totalWaste = 0;

// Atık Giriş Formu
const wasteForm = document.getElementById("wasteForm");
const wasteCount = document.getElementById("wasteCount");
const wasteList = document.getElementById("wasteList");

// Atık Güncelleme İşlevi
function updateWasteCounter(amount) {
    totalWaste += amount;
    wasteCount.textContent = totalWaste.toFixed(1); // Virgülden sonra 1 basamak
}

// Form Gönderimi
wasteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Form Verilerini Al
    const wasteType = document.getElementById("wasteType").value;
    const wasteAmount = parseFloat(document.getElementById("wasteAmount").value);

    // Listeye Ekle
    const listItem = document.createElement("li");
    listItem.textContent = `${wasteAmount.toFixed(1)} kg ${wasteType}`;
    wasteList.appendChild(listItem);

    // İlk "Henüz atık eklenmedi." mesajını kaldır
    if (wasteList.firstChild && wasteList.firstChild.textContent === "Henüz atık eklenmedi.") {
        wasteList.removeChild(wasteList.firstChild);
    }

    // Sayacı Güncelle
    updateWasteCounter(wasteAmount);

    // Formu Temizle
    wasteForm.reset();
});
