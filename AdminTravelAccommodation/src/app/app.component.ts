import { Component ,OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  ngOnInit()
  {
    
  }

  ShowModel()
  {
    alert($('.btn').css('color'));
  }
}
