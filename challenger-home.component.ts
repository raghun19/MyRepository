import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DietService } from '../service/diet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-challenger-home',
  templateUrl: './challenger-home.component.html',
  styleUrls: ['./challenger-home.component.css']
})


export class ChallengerHomeComponent implements OnInit {

  authenticateLogin : any;
  sessionValue: JSON;
  showLogs:boolean = false;

  constructor(private dietService : DietService, private route : Router) {
    // Hide submenus
    $(function(){
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
      });

      $(window).resize(function(e) {
        if($(window).width()<=768){
          $("#wrapper").removeClass("toggled");
        }else{
          $("#wrapper").addClass("toggled");
        }
      });
    });
    
  }
  

  ngOnInit(): void {
    
    this.authenticateLogin = this.dietService.emptyObj;
    this.sessionValue = JSON.parse(sessionStorage.getItem('userData'))
   
    if(this.authenticateLogin == null){
     
      this.authenticateLogin = this.sessionValue;
    }


  }
  
 dailyLogs(){
  this.showLogs = true;
  

 }

 logOut(){
   sessionStorage.removeItem('userData');
   this.route.navigate(['']);
 }
 



}
