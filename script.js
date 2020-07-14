var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Blog = [];
var PlacesLocations = /** @class */ (function () {
    function PlacesLocations(img, location, street, houseNumber, postCode, city, web) {
        this.img = img;
        this.location = location;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postCode = postCode;
        this.city = city;
        this.web = web;
        Blog.push(this);
    }
    PlacesLocations.prototype.display = function () {
        return "<div class=\"one\">\n        <div class= card\" style=\"width: 15rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n        <h5 class=\"card-text\">" + this.location + "</h5>\n        <p class=\"card-text\">" + this.street + "</p>\n        <p class=\"card-text\">" + this.houseNumber + "</p>\n        <p class=\"card-text\">" + this.postCode + "</p>\n        <p class=\"card-text\">" + this.city + "</p>\n        <p class=\"card-text\">" + this.web + "</p>\n        </div>\n        </div>\n        </div>";
    };
    return PlacesLocations;
}());
//let newobject= new PlacesLocations("img/on.jpg", "ON Restaurant", "SomeStreet", "Street", 23, 1130, "vienna", "http..." )
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(img, location, street, houseNumber, postCode, city, web, typo, tele) {
        var _this = _super.call(this, img, location, street, houseNumber, postCode, city, web) || this;
        _this.typo = typo;
        _this.tele = tele;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return "<div class=\"one\">\n        <div class= card\" style=\"width: 15rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n        <h5 class=\"card-text\">" + this.location + "</h5>\n        <p class=\"card-text\">" + this.street + "</p>\n        <p class=\"card-text\">" + this.houseNumber + "</p>\n        <p class=\"card-text\">" + this.postCode + "</p>\n        <p class=\"card-text\">" + this.city + "</p>\n        <p class=\"card-text\">" + this.web + "</p>\n        <p class=\"card-text\">" + this.typo + "</p>\n        <p class=\"card-text\">" + this.tele + "</p>\n        </div>\n        </div>\n        </div>";
    };
    return Restaurants;
}(PlacesLocations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(img, location, street, houseNumber, postCode, city, web, typo, tele, eventName, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, img, location, street, houseNumber, postCode, city, web) || this;
        _this.typo = typo;
        _this.tele = tele;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"one\">\n        <div class=\"three\" card\" style=\"width: 15rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n        <h5 class=\"card-text\">" + this.location + "</h5>\n        <p class=\"card-text\">" + this.street + "</p>\n        <p class=\"card-text\">" + this.houseNumber + "</p>\n        <p class=\"card-text\">" + this.postCode + "</p>\n        <p class=\"card-text\">" + this.city + "</p>\n        <p class=\"card-text\">" + this.web + "</p>\n        <p class=\"card-text\">" + this.typo + "</p>\n        <p class=\"card-text\">" + this.tele + "</p>\n        <p class=\"card-text\">" + this.eventName + "</p>\n        <p class=\"card-text\">" + this.eventDate + "</p>\n        <p class=\"card-text\">" + this.eventTime + "</p>\n        <p class=\"card-text\">" + this.ticketPrice + "</p>\n        </div>\n        </div>\n        </div>";
    };
    return Events;
}(PlacesLocations));
var place1 = new PlacesLocations("img/palmenhaus.jpg", "Palmenhaus", "Burggarten", 1, 1010, "Vienna", "https://www.palmenhaus.at");
var place2 = new PlacesLocations("img/stcharles.jpg", "St. Charles Church", "Karlsplatz", 1, 1010, "Vienna", "https://www.stCharles.at");
var place3 = new PlacesLocations("img/sbparkjpg.jpg", "Schönbrunn Park, Vienna", "Maxingstraße", 13, 1130, "Vienna", "www.schönbrunn.at");
var place4 = new PlacesLocations("img/prater.jpg", "Prater, Vienna", "Prater", 1, 1130, "Vienna", "www.prater.at");
var restaurant1 = new Restaurants("img/on.jpg", "ON Restaurant", "Wehrgasse", 8, 1050, "Vienna", "http://www.restaurant-on.at", "Chinese", 436605854900);
var restaurant2 = new Restaurants("img/off.jpg", "OFF Restaurant", "Klehrgasse", 9, 1150, "Vienna", "http://www.restaurant-off.at", "African", 436606864600);
var restaurant3 = new Restaurants("img/biof.jpg", "BioFrische", "Stutterheimstraße", 6, 1150, "Vienna", "http://www.biofrische.wien", "Indian", 436609529215);
var restaurant4 = new Restaurants("img/eat.jpg", "EAT", "Heimstraße", 8, 1151, "Vienna", "http://www.eat.wien", "American", 436789529215);
var event1 = new Events("img/cats.png", "CATS", "Ronnacher-Seilerstätte", 9, 1010, "Vienna", "https://www.catsmusical.at", 436609529215, "Musical", "Cats-the-musical", 15 - 12 - 2020, "at EIGHT PM", 120.00);
var event2 = new Events("img/gnr.jpg", "Guns'n Roses", "Ernst Happel Stadion - Meiereistraße", 7, 1020, "Vienna", "https://www.gunsandroses.com", 436605854911, "Rock", "Guns'n Roses", 16 - 10 - 2020, "at NINE PM", 95.50);
var event3 = new Events("img/rock.jpg", "Rock", "Im Stadion - Einereistraße", 17, 1120, "Vienna", "https://www.rock.com", 436605854911, "Classic", "Rock", 14 - 10 - 2020, "at NINE PM", 95.50);
var event4 = new Events("img/music.jpg", "Music", "In einem Stadion - Einereistraße", 17, 1120, "Vienna", "https://www.music.com", 436605854911, "Accustic", "Music", 14 - 10 - 2020, "at NINE PM", 95.50);
console.log(Blog);
var result = document.getElementById("result");
for (i = 0; i < Blog.length; i++) {
    result.innerHTML += Blog[i].display();
}
