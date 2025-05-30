import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'digital-department-application';

  greeting = "";

  ngOnInit(): void {
    console.log('Я родился!');
  }
  
  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}
