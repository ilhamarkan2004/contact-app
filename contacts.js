const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

//Membuat folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file contact.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, nohp) => {
    const contact = {
        nama,
        email,
        nohp
    };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    // Cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(
            chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
        );
        return false;
    }
    // Cek email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(
                chalk.red.inverse.bold("Email tidak valid")
            );
            return false;
        }
    }
    // Cek noHP
    if (!validator.isMobilePhone(nohp, 'id-ID')) {
        console.log(chalk.green.inverse.bold("No HP tidak valid"));
        return false;
    }




    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log(chalk.red.inverse.bold('Terimakasih sudah memasukkan data'));

};

module.exports = {
    simpanContact
}