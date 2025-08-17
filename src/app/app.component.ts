import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importer RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // Déclarez-le comme un composant autonome
  imports: [RouterModule],  // Importer RouterModule pour utiliser les routes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Application Angular';
}
