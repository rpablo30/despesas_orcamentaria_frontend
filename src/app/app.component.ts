import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
  }
  title = 'KUKAC-front';

  selectedOption: string = '';

  showImage: boolean = true;
  onOptionChange() {
    if (this.selectedOption === 'none') {
      // Se a opção "none" for selecionada, navegue para uma rota vazia (em branco)
      this.router.navigate(['/']);
    } else {
      switch (this.selectedOption) {
        case 'palindromos':
          this.router.navigate(['/palindromos']);
          break;
        case 'troco':
          this.router.navigate(['/troco']);
          break;
        case 'veiculos':
          this.router.navigate(['/veiculos']);
          break;
        case 'procurarcep':
          this.router.navigate(['/procurarcep']);
          break;
        default:
         
          break;
      }
    }
  }
}
