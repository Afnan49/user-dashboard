import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
