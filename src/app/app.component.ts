import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template:`<app-component3></app-component3>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  // onClicked(firednumber: number){
  //   console.log(firednumber);
  // }
  Accounts=[
    {name:'Granthali',
    status:'Inactive'},
    {name:'Jadhav',
    status:'Inactive'}
  ];

  onAccountAdded(newAccount:{name:string, status:string}){
    this.Accounts.push(newAccount);
  }
  onStatusChanged(updateinfo: {id: number , newStatus: string})
  {
    this.Accounts[updateinfo.id].status = updateinfo.newStatus;
    // this.Accounts[updateinfo.id] :updateinfo.newStatus;
    
  }
}

