import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'posts-list', component: PostsListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
