import {Component, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/Geolocation/ngx';
import {LoadingController} from '@ionic/angular';

declare var google;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    mapRef = null;

    constructor(
        private geolocation: Geolocation,
        private loadingController: LoadingController,
    ) {
    }

    ngOnInit(): void {
        this.loadMap();
    }

    async loadMap() {
        const loading = await this.loadingController.create();
        loading.present();

        const myLatLng = await this.getLocation();
        console.log(myLatLng);

        const mapEle: HTMLElement = document.querySelector('#homeMap');
        // create map
        const map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
            loading.dismiss();
            this.addMaker(myLatLng.lat, myLatLng.lng);
        });
    }

    private addMaker(lat: number, lng: number) {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.mapRef,
            title: 'Hello World!'
        });
    }

    private async getLocation() {
        const rta = await this.geolocation.getCurrentPosition();
        return {
            lat: rta.coords.latitude,
            lng: rta.coords.longitude
        };
    }
    private currentNumber = 0;
    private increment () {
        this.currentNumber++;
    }

    private decrement () {
        this.currentNumber--;
    }
}
