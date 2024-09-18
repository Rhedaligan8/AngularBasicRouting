import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



const routes: Routes = [
    
    {path:'',component:HomepageComponent},
    {path:'landingpage',component:LandingpageComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
]

@NgModule ({

    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing:true})

    ],
    declarations: [
        AppComponent,
        HomepageComponent,
    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
})

export class AppModule{}