import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent)
  .catch((err: any) => console.error(err)); // Add type for 'err'

export default bootstrap; // Export the bootstrapping function