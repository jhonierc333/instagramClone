import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  
  constructor( private service:ServicesService) { 
      
    

  }

  ngOnInit(): void {
    
  }

  


  


  

}
