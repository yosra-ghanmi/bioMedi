import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Ajoute cette ligne
})
export class AppComponent {
  title = 'bioMedi';
}
