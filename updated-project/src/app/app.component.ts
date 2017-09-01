			// tslint:disable:indent

import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

characters = [
		{
			name: 'Zoidberg',
			age: 58
		},
		{
			name: 'Professor Farnsworth',
			age: 190
		},
		{
			name: 'Philip J Fry',
			age: 32
		},
		{
			name: 'Bender',
			age: 3000
    },
    // this.woopWoopWoop = this.woopWoopWoop;

  ];
  
  favoriteCartoon: string = 'Futurama'
  imageUrl: string = 'https://i.imgflip.com/1cgykt.jpg'
  debbieDowner: boolean = false;
  showZoidberg: boolean = false;
  money: number = 24;



woopWoopWoop(): void {
  this.showZoidberg = !this.showZoidberg;
}


// MainController.$inject = ['MyFactory'];
// function MainController(MyFactory) {
// 	var vm = this;
// 	

// 	vm.



// 	MyFactory.easterEgg();

// }

}
