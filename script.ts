let Blog = [];

class PlacesLocations {
    img : string;
    location : string;
    street : string;
    houseNumber : number;
    postCode : number;
    city : string;
    web : string;

    constructor(img, location, street, houseNumber, postCode, city, web){
        this.img = img;
        this.location = location;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postCode = postCode;
        this.city = city;
        this.web = web;

        Blog.push(this)
    }
    

    display(){
        return `<div class="one">
        <div class= card" style="width: 15rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-text">${this.location}</h5>
        <p class="card-text">${this.street}</p>
        <p class="card-text">${this.houseNumber}</p>
        <p class="card-text">${this.postCode}</p>
        <p class="card-text">${this.city}</p>
        <p class="card-text">${this.web}</p>
        </div>
        </div>
        </div>`
    
    }

}

//let newobject= new PlacesLocations("img/on.jpg", "ON Restaurant", "SomeStreet", "Street", 23, 1130, "vienna", "http..." )


class Restaurants extends PlacesLocations {
    typo : string;
    tele : number;
    
    constructor(img, location, street, houseNumber, postCode, city, web, typo, tele){
        super(img, location, street, houseNumber, postCode, city, web);
        this.typo = typo;
        this.tele = tele;
    }

    display(){
        return `<div class="one">
        <div class= card" style="width: 15rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-text">${this.location}</h5>
        <p class="card-text">${this.street}</p>
        <p class="card-text">${this.houseNumber}</p>
        <p class="card-text">${this.postCode}</p>
        <p class="card-text">${this.city}</p>
        <p class="card-text">${this.web}</p>
        <p class="card-text">${this.typo}</p>
        <p class="card-text">${this.tele}</p>
        </div>
        </div>
        </div>`
    }
}

class Events extends PlacesLocations {
    typo : string;
    tele : number;
    eventName : string;
    eventDate : number;
    eventTime : string;
    ticketPrice : number;

    constructor(img, location, street, houseNumber, postCode, city, web, typo, tele, eventName, eventDate, eventTime, ticketPrice){
        super(img, location, street, houseNumber, postCode, city, web);
        this.typo = typo;
        this.tele = tele;
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }

    display(){
        return `<div class="one">
        <div class="three" card" style="width: 15rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-text">${this.location}</h5>
        <p class="card-text">${this.street}</p>
        <p class="card-text">${this.houseNumber}</p>
        <p class="card-text">${this.postCode}</p>
        <p class="card-text">${this.city}</p>
        <p class="card-text">${this.web}</p>
        <p class="card-text">${this.typo}</p>
        <p class="card-text">${this.tele}</p>
        <p class="card-text">${this.eventName}</p>
        <p class="card-text">${this.eventDate}</p>
        <p class="card-text">${this.eventTime}</p>
        <p class="card-text">${this.ticketPrice}</p>
        </div>
        </div>
        </div>`
    }
    

    }

let place1 = new PlacesLocations("img/palmenhaus.jpg", "Palmenhaus", "Burggarten", 1, 1010, "Vienna", "https://www.palmenhaus.at");
let place2 = new PlacesLocations("img/stcharles.jpg", "St. Charles Church", "Karlsplatz", 1, 1010, "Vienna", "https://www.stCharles.at");
let place3 = new PlacesLocations("img/sbparkjpg.jpg", "Schönbrunn Park, Vienna", "Maxingstraße", 13, 1130, "Vienna", "www.schönbrunn.at");
let place4 = new PlacesLocations("img/prater.jpg", "Prater, Vienna", "Prater", 1, 1130, "Vienna", "www.prater.at");

 let restaurant1 = new Restaurants("img/on.jpg", "ON Restaurant", "Wehrgasse", 8, 1050, "Vienna", "http://www.restaurant-on.at", "Chinese", 436605854900);
 let restaurant2 = new Restaurants("img/off.jpg", "OFF Restaurant", "Klehrgasse", 9, 1150, "Vienna", "http://www.restaurant-off.at", "African", 436606864600);
 let restaurant3 = new Restaurants("img/biof.jpg", "BioFrische", "Stutterheimstraße", 6, 1150, "Vienna", "http://www.biofrische.wien", "Indian", 436609529215);
 let restaurant4 = new Restaurants("img/eat.jpg", "EAT", "Heimstraße", 8, 1151, "Vienna", "http://www.eat.wien", "American", 436789529215);

 let event1 = new Events ("img/cats.png", "CATS", "Ronnacher-Seilerstätte", 9, 1010, "Vienna", "https://www.catsmusical.at", 436609529215, "Musical", "Cats-the-musical", 15-12-2020, "at EIGHT PM", 120.00);
 let event2 = new Events ("img/gnr.jpg", "Guns'n Roses", "Ernst Happel Stadion - Meiereistraße", 7, 1020, "Vienna", "https://www.gunsandroses.com", 436605854911, "Rock", "Guns'n Roses", 16-10-2020, "at NINE PM", 95.50);
 let event3 = new Events ("img/rock.jpg", "Rock", "Im Stadion - Einereistraße", 17, 1120, "Vienna", "https://www.rock.com", 436605854911, "Classic", "Rock", 14-10-2020, "at NINE PM", 95.50);
 let event4 = new Events ("img/music.jpg", "Music", "In einem Stadion - Einereistraße", 17, 1120, "Vienna", "https://www.music.com", 436605854911, "Accustic", "Music", 14-10-2020, "at NINE PM", 95.50);


console.log(Blog)
var result=document.getElementById("result");

for(i=0;i<Blog.length;i++){
    result.innerHTML+= Blog[i].display()

}


