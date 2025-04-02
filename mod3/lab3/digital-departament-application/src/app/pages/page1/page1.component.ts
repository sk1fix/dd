import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-page1',
  standalone: false,
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  constructor(private dataService: DataService) {
    console.log('Данные из сервиса:', this.dataService.getExampleData());
  }

  logServiceData(): void {
    console.log('Обновленные данные:', this.dataService.getExampleData());
  }
}
