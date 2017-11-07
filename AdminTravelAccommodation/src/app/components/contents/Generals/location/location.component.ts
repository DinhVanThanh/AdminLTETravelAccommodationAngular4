import { Component, ElementRef, NgZone, OnInit, ViewChild  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  PageTitle:string = 'Locations';
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
   
 

  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() { 
    //create search FormControl
    this.searchControl = new FormControl(); 
    this.setUpGoogleApiGeoAutocomplete();
  }
  private fillInAddress()
  {
    
  }
  private setUpGoogleApiGeoAutocomplete() {
    var autocomplete : any;
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      autocomplete = new google.maps.places.Autocomplete((document.getElementById('SearchBox')) as HTMLInputElement);
      autocomplete.addListener('place_changed', ()=>{
        var place = autocomplete.getPlace();
        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i];
           
            var val = place.address_components[i];
            console.log(val);
            console.log(addressType);
        }
        console.log(place);
      });
       
    });
  }

}
