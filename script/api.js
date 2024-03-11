//api isteği atan fonksiyonlar bu dosyada

const options={
    headers: {
		'X-RapidAPI-Key': 'b1dbfc42f7msh36c134a4d6acebcp143c03jsn6a657433789e',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
}
// API işlemlerini yönetecek class
export default class API {
    //kurucu method
    constructor(){
        this.songs = [];
    }
    //Türkiyedeki populer müzikleri alıp döndürür
    async getPopular(){
        const res = await fetch (
            `https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr`, 
            options
            );
        const data= await res.json();
        //console. log(data)

        //!class da tanımlanan songs değişkeninine aktar.
        this.songs = data.tracks;
    }
    //aratılan kelimeye uygun şarkıları al
    async searchMusic(query){
        const res= await fetch(
            `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`, 
            options
            );
       //gelen cevabı işle
        const data= await res.json();
        //console. log(data)
        
        // gelen cevabın formatını değiştir
    const formatted = data.tracks.hits.map((song) => {
        return song.track;
      });
  
      // gelen veriyi değişkene aktar
      this.songs = formatted;
    }




   }