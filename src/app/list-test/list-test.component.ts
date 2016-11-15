import { Component, OnInit } from '@angular/core';

class Apples{
  constructor( 
    public name: string,
    public colour: string
    ){}
}

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

appleList : [Apples];
apple: Apples;


  constructor() { 
    this.apple = {name: '', colour: ''};
this.appleList = [
{ name: 'Granny Smith', colour: 'Green'},
{name: 'Delicious', colour: 'Deep Red'},
{name: 'Candy', colour: 'Crab'}
];
  }

addApples(){
 this.appleList.push(this.apple);
 this.apple = {name: '', colour: ''};
}
  ngOnInit() {
  }

}
