
formatPhone = (...nomor) => {
    // let nomorAwal = []
    // for (const index in object) {
    //     if (object[index]) {
            
    //     }
    // }
    console.log(...nomor)
}

let karyawan = [
    {
        nama : 'huda',
        jabatan: 'kepala chef',
        'gaji perhari': 100000,
        absen: 2
    }
]

function hitungGaji(namaKaryawan, gajiPerhari, jumlahAbsen){
    return gajiPerhari*(30 - jumlahAbsen)
}


function orderPizza(type, name){
    console.log('pizza ordered...');
    console.log('pizza is for preparation');
    setTimeout(function (){  
        let msg = `your ${type} ${name} pizza is ready! The total bill is $13`;
        console.log(`On the pizzahub server ${msg}`);
    }, 3000)
}

let pesan = orderPizza('Pizza', 'Meat Lovers')
alert(orderPizza(pesan))

