import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ownerServices } from 'src/app/ownerModule/services/ownerServices';


@Component({
  selector: 'app-recentbookings',
  templateUrl: './recentbookings.component.html',
  styleUrls: ['./recentbookings.component.css']
})
export class RecentbookingsComponent implements OnInit {
  booking:any ={};
  data:any ={};
  constructor(private http: HttpClient,
    private recentservice: ownerServices) { }

  ngOnInit(): void {
   
    this.getrecentbookings();
  }

getrecentbookings(){
  this.recentservice.getRecentbookings().subscribe(res =>{
    console.log(res.data[0])
    this.data = res.data[0];
  })
}
}