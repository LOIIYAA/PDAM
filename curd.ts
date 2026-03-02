interface Siswa {
    id: number,
    nama: string,
    kelas: string
}

let Pengisiansiswa: Siswa[] = [
    { id: 1, nama: "Loi", kelas: "XI RPL 2" },
    { id: 2, nama: "Resti", kelas: "XI IPS 2" },
    { id: 3, nama: "Haechan", kelas: "XI RPL 2" },
    { id: 4, nama: "Mark", kelas: "XI RPL 2" },
    { id: 5, nama: "Heesung", kelas: "XI IPS 2" }
];

// Tambah siswa
function tambahsiswa(nama: string, kelas: string): Siswa {
    const idsiswa = Pengisiansiswa.length > 0 
        ? Pengisiansiswa[Pengisiansiswa.length - 1].id + 1 
        : 1;
    const idbaru: Siswa = { id: idsiswa, nama, kelas };
    Pengisiansiswa.push(idbaru);
    return idbaru;
}

// Baca semua siswa
function bacasiswa(): Siswa[] {
    return Pengisiansiswa;
}

// Baca siswa lewat ID
function bacasiswalewatid(id: number): Siswa | undefined {
    return Pengisiansiswa.find(ini => ini.id === id);
}

// Update siswa
function updatesiswa(id: number, namah: string, kelash: string): Siswa | null {
    const posisi = Pengisiansiswa.findIndex(ke => ke.id === id);
    if (posisi !== -1) {
        Pengisiansiswa[posisi].nama = namah;
        Pengisiansiswa[posisi].kelas = kelash;
        return Pengisiansiswa[posisi];
    }
    return null;
}

// Hapus siswa
function hapussiswa(id: number): Siswa[] | null {
    const pcc = Pengisiansiswa.findIndex(itu => itu.id === id);
    if (pcc !== -1) {
        return Pengisiansiswa.splice(pcc, 1);
    }
    return null;
}

// Percobaan 
console.log("Awal:", bacasiswa());
tambahsiswa("Jeno", "XII RPL 1");
console.log("Setelah tambah:", bacasiswa());
updatesiswa(2, "Budi Santoso", "XII TKJ");
console.log("Setelah update:", bacasiswa());
hapussiswa(1);
console.log("Setelah hapus:", bacasiswa());
