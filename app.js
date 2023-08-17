const yargs = require('yargs');
// Mengambil argumen dari command line
const contacts = require('./contacts');

yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor Handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();




















// //Core Module
// // file system

// const contacts = require('./contacts');

// const main = async() =>{
//   const nama = await contacts.tulisPertanyaan("Masukkan nama Anda : ");
//   const email = await contacts.tulisPertanyaan("Masukkan email Anda : ");
//   const nohp = await contacts.tulisPertanyaan("Masukkan nohp Anda : ");

//   contacts.simpanContact(nama, email, nohp);
// };

// main();
