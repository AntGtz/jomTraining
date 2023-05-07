import { Component, Input, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { Location } from 'src/app/models/location.model';
import { NgModule , ChangeDetectorRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
  // import Swiper JS
  declare const google: any;
  
@Component({
  selector: 'app-ricmor-card',
  templateUrl: './ricmor-card.component.html',
  styleUrls: ['./ricmor-card.component.scss'],
})



export class RicmorCardComponent  implements OnInit {


  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;

  @ViewChild('latInput', { read: NgModel }) latModel!: NgModel;
  @ViewChild('lngInput', { read: NgModel }) lngModel!: NgModel;

  marker!: google.maps.Marker;
  map!: google.maps.Map;
  markerPosition!: string;
  
  currentMarker: google.maps.Marker | null = null;
  
  @NgModule({
    imports: [
      BrowserModule,
      HammerModule
    ],
    // ...
  })
 
   // cambia esto según la lógica de tu aplicación
  @Input() character: any;
  @Input() locations: any;
  latitude: any;
  longitude: any;
  constructor(private cdRef: ChangeDetectorRef) {  }

    episodes: Episode[] = [];
    location: boolean = false 


    ngOnInit(): void {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {  lat: 22.1566, lng: -100.9855 },
        zoom: 12
      });
  
      const marker = new google.maps.Marker({
        position: {  lat: 22.1566, lng: -100.9855 },
        map: map,
        title: 'Mi ubicación'
      });

//      google.maps.event.addListener(map, 'click', (event: { latLng: any; }) => {
 //       const marker = new google.maps.Marker({
   //       position: event.latLng,
     //     map: map,
       //   title: 'Nuevo marcador'
      //  });
        
     // });

      google.maps.event.addListener(map, 'click', (event: { latLng: any; }) => {
        if (this.currentMarker) {
          this.currentMarker.setMap(null);
        }
        const marker = new google.maps.Marker({
          position: event.latLng,
          map: map,
          title: 'Nuevo marcador',
          
        });
        this.currentMarker = marker;
        


        this.markerPosition = `Latitud: ${event.latLng.lat()}, Longitud: ${event.latLng.lng()}`;
        console.log(this.markerPosition)
        const lat = marker.getPosition()?.lat();
        const lng = marker.getPosition()?.lng();
        if (lat && lng) {
          this.latitude = lat;
          this.longitude = lng;
        }
        console.log(this.latitude)
        console.log(this.longitude)


        this.cdRef.detectChanges(); // Para actualizar la vista
        

      });
      
    }





  showEpisodes(episodes: []) {
    if(this.episodes.length > 0){
      this.episodes = [];
    }else {
      this.episodes = episodes;
    }
    console.log(this.episodes)
  }

  showLocation() {
    this.location = !this.location;
  }


}


