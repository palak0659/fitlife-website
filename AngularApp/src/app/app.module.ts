// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { IntroComponent } from './intro/intro.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YogaComponent } from './yoga/yoga.component';
import { YogaformComponent } from './yogaform/yogaform.component';


import { ReactiveFormsModule } from "@angular/forms";
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DietComponent } from './diet/diet.component';
import { SupplementComponent } from './supplement/supplement.component';
import { SupplementformComponent } from './supplementform/supplementform.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BmiComponent } from './bmi/bmi.component';
import { DoctorformComponent } from './doctorform/doctorform.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { YogaBellyfatComponent } from './yoga-bellyfat/yoga-bellyfat.component';
import { YogaTighComponent } from './yoga-tigh/yoga-tigh.component';
import { YogaAsthmaComponent } from './yoga-asthma/yoga-asthma.component';
import { YogaDietbetesComponent } from './yoga-dietbetes/yoga-dietbetes.component';
import { SupplementgainComponent } from './supplementgain/supplementgain.component';
import { DietformComponent } from './dietform/dietform.component';
import { Diet5Component } from './diet5/diet5.component';
import { Diet15Component } from './diet15/diet15.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { BmrComponent } from './bmr/bmr.component';
import { BodybuildingComponent } from './bodybuilding/bodybuilding.component';
import { BodybuildingformComponent } from './bodybuildingform/bodybuildingform.component';

@NgModule({
 
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    IntroComponent,
    YogaComponent,
    YogaformComponent,
    CreateProfileComponent,
    DietComponent,
    SupplementComponent,
    SupplementformComponent,
    DoctorComponent,
    BmiComponent,
    DoctorformComponent,
    FilterPipe,
    YogaBellyfatComponent,
    YogaTighComponent,
    YogaAsthmaComponent,
    YogaDietbetesComponent,
    SupplementgainComponent,
    DietformComponent,
    Diet5Component,
    Diet15Component,
    ContactComponent,
    MapComponent,
    BmrComponent,
    BodybuildingComponent,
    BodybuildingformComponent,
   
  ],
  imports: [
    ReactiveFormsModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    // CreateProfileComponent,
    NgbModule,

    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
