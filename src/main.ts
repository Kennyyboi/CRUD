import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'src/app/header/header.component.css';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
