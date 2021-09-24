import { Component,EventEmitter, Output } from "@angular/core";

@Component({
    selector:'practicecomp1',
    templateUrl:'./practicecomp1.component.html'
})
export class Practicecomp1{
@Output() accountAdded=new EventEmitter<{name: string,status: string}>();

onAccountCreated(accName: string, accStatus:string){
         this.accountAdded.emit({
         name: accName,
         status: accStatus
});
console.log("Name: "+accName+"Status: " +accStatus);
}

}