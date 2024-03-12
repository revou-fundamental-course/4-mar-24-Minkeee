var tinggi, berat, bmi, kategori, tinggiMeter, penjelasan1, penjelasan2;
const keterangan = [
  "Kakak termasuk ke dalam kategori Terlalu Kurus:(",
  "Kakak termasuk ke dalam kategori Ideall!",
  "Kakak termasuk ke dalam kategori Berat Badan berlebih",
  "Wah.. berat badan kakak terlalu berlebih",
];

const saran = [
  "Kalau kakak berada di dalam kategori ini, kakak perlu menambah makan kakak dan atur pola olahraga kakak",
  "Kalau berat badan kakak sudah ideal, tetap konsumsi makanan bergizi dan jangan lupa olahraga",
  "Rajin olahraga kak! semangat",
  "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan olahraga",
];
// calculate button
perhitunganBMI = () => {
  tinggi = parseFloat(document.getElementById("tinggi").value);
  tinggiMeter = tinggi / 100;
  berat = parseFloat(document.getElementById("berat").value);
  bmi = berat / tinggiMeter ** 2;
  if (bmi < 18.5) {
    kategori = keterangan[0];
    penjelasan1 = saran[0];
  } else if (bmi >= 18.5 && bmi < 24.9) {
    kategori = keterangan[1];
    penjelasan1 = saran[1];
  } else if (bmi > 24.9 && bmi < 29.9) {
    kategori = keterangan[2];
    penjelasan1 = saran[2];
  } else {
    kategori = keterangan[3];
    penjelasan1 = saran[3];
  }

  document.getElementById("bmi").innerHTML =
    "Berat Badan kakak adalah " + bmi.toFixed(2);
  document.getElementById("kategori").innerHTML = kategori;
  document.getElementById("penjelasan1").innerHTML = penjelasan1;
};

// reset button

itungLagi = () => {
  document.getElementById("bmi").innerHTML = "";
  document.getElementById("kategori").innerHTML = "";
  document.getElementById("penjelasan1").innerHTML = "";
};
