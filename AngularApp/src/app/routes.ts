import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { IntroComponent } from './intro/intro.component';
import { YogaComponent } from './yoga/yoga.component';
 import { DietComponent } from './diet/diet.component';
import { YogaformComponent } from './yogaform/yogaform.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SupplementComponent } from './supplement/supplement.component';
import { SupplementformComponent } from './supplementform/supplementform.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BmiComponent } from './bmi/bmi.component';
import { DoctorformComponent } from './doctorform/doctorform.component';
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
export const appRoutes: Routes = [
    {
        path: 'signup' ,component: SignUpComponent 
    },
    {
        path: 'doctor' ,component: DoctorComponent
    },
    {
        path: 'bmi' ,component: BmiComponent
    },
    {
        path: 'asthma' ,component: YogaAsthmaComponent
    },
    {
        path: 'yoga' ,component: YogaComponent
    },
    {
        path: 'bodybuildingform' ,component: BodybuildingformComponent
    },
    {
        path: 'bodybuilding' ,component: BodybuildingComponent
    },
    {
        path: 'signin', component: SignInComponent 
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', component: IntroComponent
    },
    {
        path: 'signin', redirectTo: '/signin', pathMatch: 'full'
    },
   
    {
        path: 'supplement', component: SupplementComponent
    },
    {
        path: 'yogaform', component: YogaformComponent
    },
    {
        path: 'supplementform', component:  SupplementformComponent
    },
    {
        path: 'doctorform', component:  DoctorformComponent
    },
    
    {
        path: 'picture', component: CreateProfileComponent
    },
    {
        path: 'diet', component: DietComponent
    },
    {
        path: 'bellyfat', component: YogaBellyfatComponent
    },
    {
        path: 'diabetes', component: YogaDietbetesComponent 
    },
    {
        path: 'tigh', component: YogaTighComponent 
    },
    {
        path: 'supplementgain' ,component:  SupplementgainComponent
    },
    {
        path: 'dietform' ,component: DietformComponent
    },
    {
        path: 'diet5' ,component: Diet5Component
    },
    {
        path: 'diet15' ,component: Diet15Component
    },
    {
        path: 'contact' ,component:  ContactComponent

    },
    {
        path: 'map' ,component:  MapComponent

    },
    {
        path: 'bmr' ,component:  BmrComponent

    },
    
   
];