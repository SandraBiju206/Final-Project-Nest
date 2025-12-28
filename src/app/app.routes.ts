import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Product } from './Pages/product/product';
import { Contact } from './Pages/contact/contact';
import { SingleListview } from './single-listview/single-listview';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'product', component: Product },
    { path: 'single-listview/:titleid', component: SingleListview },
    { path: 'contact', component: Contact }
];
