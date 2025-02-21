import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "shopping-app-63b25", appId: "1:85523711381:web:8802c849f53991cd8ee29c", storageBucket: "shopping-app-63b25.firebasestorage.app", apiKey: "AIzaSyBUg0NLjI9uW4AmS7wvdXQeXkEZtPTVwN4", authDomain: "shopping-app-63b25.firebaseapp.com", messagingSenderId: "85523711381" })), provideFirestore(() => getFirestore()), provideAnimationsAsync()]
};
