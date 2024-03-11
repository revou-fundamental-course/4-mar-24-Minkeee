// PERHITUNGAN BMI START
let beratBadan;
let tinggiBadan;
const keterangan = [
  "Kamu kekurangan berat badan",
  "Berat badan kamu ideal",
  "Berat badan kamu berlebih",
  "Obesitas",
];
perhitunganBMI = (beratBadan, tinggiBadan) => {
  let konverterTinggiBadan = tinggiBadan / 100;
  var hasil = beratBadan / konverterTinggiBadan ** 2;
  if (hasil < 18.5) {
    return `Hasilnya adalah ${hasil}, itu artinya ${keterangan[0]}`;
  } else if (hasil >= 18.5 && hasil < 24.9) {
    return `Hasilnya adalah ${hasil}, itu artinya ${keterangan[1]}`;
  } else if (hasil > 24.9 && hasil < 29.9) {
    return `Hasilnya adalah ${hasil}, itu artinya ${keterangan[2]}`;
  } else {
    return `Hasilnya adalah ${hasil}, itu artinya ${keterangan[3]}`;
  }
};
// PERHITNGAN BMI END
