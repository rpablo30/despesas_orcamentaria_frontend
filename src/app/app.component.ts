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
  title = 'gastos-recife-front';

  selectedOption: string = '';

  showImage: boolean = true;
  onOptionChange() {
    if (this.selectedOption === 'none') {
      // Se a opção "none" for selecionada, navegue para uma rota vazia (em branco)
      this.router.navigate(['/']);
    } else {
      switch (this.selectedOption) {
        case 'totais':
          this.router.navigate(['/despesas']);
          break;
        case 'mes':
          this.router.navigate(['/despesas/mes']);
          break;
        case 'categoria':
          this.router.navigate(['/despesas/categoria']);
          break;
        case 'fonte':
          this.router.navigate(['/despesas/fonte']);
          break;
        default:
          // Lógica para uma opção desconhecida (opcional)
          break;
      }
    }
  }
}
