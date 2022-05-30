class Samochod{
    constructor(marka, model, rocznik, cena, spalanie){
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;
    }

    wiek(){
        const data = new Date();
        const rok = data.getFullYear();

        return rok - this.rocznik;
    }

    koszt(){
        //koszt 6ziko

        
    }
}