import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function kalkulator() {
  console.log("=== Kalkulator Sederhana ===");
  console.log("1. Penjumlahan (+)");
  console.log("2. Pengurangan (-)");
  console.log("3. Perkalian (*)");
  console.log("4. Pembagian (/)");
  console.log("============================");

  rl.question("Pilih operasi (1/2/3/4): ", (op) => {
    rl.question("Masukkan angka pertama: ", (a) => {
      rl.question("Masukkan angka kedua: ", (b) => {
        
        a = parseFloat(a);
        b = parseFloat(b);

        let hasil;
        if (op === "1") hasil = a + b;
        else if (op === "2") hasil = a - b;
        else if (op === "3") hasil = a * b;
        else if (op === "4") hasil = b === 0 ? "Error: tidak bisa dibagi 0" : a / b;
        else hasil = "⚠️ Operasi tidak dikenal";

        console.log("Hasil:", hasil);
        rl.close();
      });
    });
  });
}

kalkulator();