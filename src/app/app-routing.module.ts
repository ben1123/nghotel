import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { SigninComponent} from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodAndBuverageComponent } from './food-and-buverage/food-and-buverage.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';

const routes: Route[] = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'food-and-buverage', component: FoodAndBuverageComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'weeddings', component: WeddingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}