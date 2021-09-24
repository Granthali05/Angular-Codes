import { Component} from '@angular/core';
@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2 {

  newNumber=[];
  onClicked(){
  
    for(let i=1;i<15;i++){
      if(i%2==0)
      this.newNumber.push(i);
    }
     
  }

}