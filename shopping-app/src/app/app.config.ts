import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideFirebaseApp(() => initializeApp({
      projectId: environment.projectId
      , appId: environment.appId
      , storageBucket: environment.storageBucket
      , apiKey: environment.apiKey
      , authDomain: environment.authDomain
      , messagingSenderId: environment.messagingSenderId
    }))
    , provideFirestore(() => getFirestore())
    , provideAnimationsAsync()
  ]
};
