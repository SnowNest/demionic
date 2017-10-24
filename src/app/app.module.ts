import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Paginas de la app
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Modulos de Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Plugins
import { IonicStorageModule } from '@ionic/storage';

// Servicios/Providers


export const firebaseConfig = {
  apiKey: "AIzaSyDme5Hov0qx3Jjy5EW2IwXysxbgtKiTCYw",
  authDomain: "fir-e3d11.firebaseapp.com",
  databaseURL: "https://fir-e3d11.firebaseio.com",
  projectId: "fir-e3d11",
  storageBucket: "fir-e3d11.appspot.com",
  messagingSenderId: "994288311723"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // Storage
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
