import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function untuk menentukan kategori usia
function kategoriUsia(usia) {
  switch (true) {
    case (usia >= 0 && usia <= 12):
      return "Anak-anak";
    case (usia >= 13 && usia <= 17):
      return "Remaja";
    case (usia >= 18 && usia <= 59):
      return "Dewasa";
    case (usia >= 60):
      return "Lansia";
    default:
      return "Tidak valid";
  }
}

// Hitung jumlah kategori
let count = {
  "Anak-anak": 0,
  "Remaja": 0,
  "Dewasa": 0,
  "Lansia": 0
};

let totalOrang = 0;
let inputKe = 1;

rl.question("Masukkan jumlah orang: ", (jumlah) => {
  totalOrang = parseInt(jumlah);

  function tanyaUsia() {
    if (inputKe <= totalOrang) {
      rl.question(`Masukkan usia orang ke-${inputKe}: `, (usia) => {
        usia = parseInt(usia);
        let kategori = kategoriUsia(usia);

        if (kategori !== "Tidak valid") {
          count[kategori]++;
        } else {
          console.log("Usia tidak valid, dihitung sebagai 0.");
        }

        inputKe++;
        tanyaUsia();
      });
    } else {
      // Cetak hasil
      console.log("\nHasil Kategori:");
      for (let k in count) {
        console.log(`${k} : ${count[k]} orang`);
      }
      rl.close();
    }
  }

  tanyaUsia();
});