import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Welcome to Luminar Bank";
  account="Account Number Please";
  accno="";
  pswd="";

  users:any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

  }

  constructor() { }

  ngOnInit(): void {
  }


  accChange(event:any){
    this.accno=event.target.value
    console.log(event.target.value)
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(event.target.value)
  }

  login(){
    
    var acno = this.accno;
    var pwd = this.pswd;

    let accDetails = this.users;
    
    if (acno in accDetails){
      if (pwd == accDetails[acno]["password"]){
        alert("Login successful")
      }
      else {
        alert("Incorrect password")
      }
      }
    else {
      alert("Invalid account number")
    }

  }

}

