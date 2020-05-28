class Manusia {
    constructor(obj = {}){
        this.name = obj.name || " ";
        this.age = obj.age || 1;
    }
    getNAmeAndAge(){
        return `${this.name} and ${this.age} years`
    }
}

const budi = new Manusia ({
    age : 18,
    name : "Budi baik hati"
})
console.log(budi);
class Pekerjaan extends Manusia{
    constructor (opt ={}){
        super(opt);
        this.pekerjaan =opt.pekerjaan || '';
        this.bekerjaSejak = opt.bekerjaSejak || '';
    }
    render(){
        let kerja = "masih bisa kerja ";
        if (this.age >=50){
            kerja = "tidak boleh kerja keras"
    }
        return `<h1> MY NAME ${this.name} </h1>
        <h2> Status ${kerja}</h2>
        `
    }
}

const Pakde = new Pekerjaan ({
    name : "Kumis Panjang",
    age : 75,
    pekerjaan : "tukang kebun",
    bekerjaSejak : "7 tahun"
});
console.log(Pakde);



// class Manusia {
//     constructor(obj = {}){
//         this.name = obj.name || '' ;
//         this.age = obj.age || 1;
//     }

//     getNameAndAge() {
//         return (`${this.name} and ${this.age} Years Old}`);
//     }
// }

// // const budi = new Manusia("Budi Baikhati",18)
// const budi = new Manusia ({
//     age : 18,
//     name : "Budi Baikhati"
// })
// console.log(budi);


// class Pekerjaan extends Manusia{
//     constructor(opt = {}) {
//         super(opt);
//         this.pekerjaan = opt.pekerjaan || ''; 
//         this.bekerja =  opt.bekerjaSejak || '';
//     }

//     render(){
//         let kerja = "masih bisa kerja"
//         if (this.age >= 50) {
//             kerja = "tidak boleh kerja keras"       
//         }
//         return `
//         <h1>My Name is ${this.name}</h1>
//         <h2>Status : ${kerja}</h2>
//         `;
//     }
// }

// // const PakDe = new Pekerjaan("Pak De",20, {pekerjaan : "tukang pijat"});
// // console.log(PakDe);

// const PakDe = new Pekerjaan ({
//     name : "Kumis Panjang",
//     age : 75,
//     pekerjaan : "tukang pijat"
// })
// console.log(PakDe);

// const BuDe = new Pekerjaan({

// })
