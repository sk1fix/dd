import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-name',
  standalone: false,
  templateUrl: './show-name.component.html',
  styleUrl: './show-name.component.css'
})
export class ShowNameComponent {

  name = "Имя по умолчанию";

  constructor(private activateRouter: ActivatedRoute,
              private router: Router
  ){
    this.name = activateRouter.snapshot.params['name'];
  }

  goMain(): void {
    //this.router.navigate(['/']);
    this.router.navigateByUrl('/');
  }
}
