const tinggi = document.getElementById("tinggi");
const berat = document.getElementById("berat");
const calculate = document.getElementById("calculate");
const index = document.getElementById("index");

calculate.addEventListener("click", () => {

    if (tinggi.value != "" && berat.value != "") {
        // index massa tubuh = berat-badan / (tinggi-badan*tinggi-badan)
        let indexValue = berat.value / (tinggi.value * tinggi.value) * 10000;
        index.innerHTML = `Indeks massa tubuh anda: <span> ${indexValue.toFixed(1)} </span>`
        if (indexValue < 18.5) {
            alert(`Tubuh anda masuk kategori "kurus"${"\n"}Anda memiliki indeks massa tubuh sebesar ${indexValue.toFixed(1)} `)
        } else if (indexValue >= 18.5 && indexValue < 24.9) {
            alert(`Tubuh anda masuk kategori "ideal"${"\n"}Anda memiliki indeks massa tubuh sebesar ${indexValue.toFixed(1)} `)
        } else if (indexValue >= 25 && indexValue < 29.9) {
            alert(`Tubuh anda masuk kategori "gemuk"${"\n"}Anda memiliki indeks massa tubuh sebesar ${indexValue.toFixed(1)} `)
        } else if (indexValue >= 30) {
            alert(`Tubuh anda masuk kategori "obesitas"${"\n"}Anda memiliki indeks massa tubuh sebesar ${indexValue.toFixed(1)} `)
        }
    } else {
        alert(`Silahkan masukan angka pada label berat dan tinggi badan`);
    }
});