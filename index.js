// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Moh Agus Setiawan",
  class: "PROA REA2A",
  gender: "male",
  age: 24,
  email: "mohagussetiaone@gmail.com",
  education: [
    { school: "SD 01", startyear: 2003, endyear: 2009 },
    { school: "SMP 01", startyear: 2009, endyear: 2012 },
    { school: "SMK 01", startyear: 2012, endyear: 2015 },
    { school: "Universitas ABC", startyear: 2016, endyear: 2020 },
  ],
};
const secondUser = {
  name: "Hilman Nafia",
  class: "PROA REA2B",
  gender: "male",
  age: 22,
  email: "hilmannafia@gmail.com",
  education: [
    { school: "SD 02", startyear: 2003, endyear: 2009 },
    { school: "SMP 02", startyear: 2009, endyear: 2012 },
    { school: "SMA 02", startyear: 2012, endyear: 2015 },
    { school: "Universitas BCD", startyear: 2015, endyear: 2019 },
  ],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users[0] = firstUser;
users[1] = secondUser;

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
