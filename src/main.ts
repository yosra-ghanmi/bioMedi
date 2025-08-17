import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Votre composant autonome
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
  // Importer les routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)  // Fournir les routes ici
  ]
});
