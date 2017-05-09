import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// This file will be called from index.html file in order to bootstrap our NG2 app module
platformBrowserDynamic().bootstrapModule(AppModule);