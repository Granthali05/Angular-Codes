import { Component, Input, Output,EventEmitter } from "@angular/core";
// import { EventEmitter } from "stream";
import { User } from "../User.module";

@Component({
    selector:'practiceComp2',
    templateUrl:'./practiceComp2.component.html'
})
export class PracticeComp2{
@Input() Account:{name:string,status:string};
@Input() id:number;

@Output() statusChanged = new EventEmitter<{id : number , newStatus : string}>();
   
onSetStatus(status:string){
    this.statusChanged.emit({id: this.id,newStatus: status});
    console.log('name: '+this.Account.name+' New Status: '+status);
}




// onActivePressed(){
//     this.userStatus='Active';
//     this.username=this.user.values.name;
//     console.log(this.username);
//     console.log(this.userStatus);
// }
// onInactivePressed(){
//     this.userStatus='Inactive';
//     console.log(this.username);
//     console.log(this.userStatus);

// }
// onUnknownPressed(){
//     this.userStatus='Unknown';
//     console.log(this.username);
//     console.log(this.userStatus);
    
// }


}