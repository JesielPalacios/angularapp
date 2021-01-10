import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CounterAppComponent } from './pages/counter-app/counter-app.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counterapp', component: CounterAppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'path', component: FeatureComponent },
//   { path: 'path', component: Component,
//   children: [
//       { path: 'childpath', component: ChildComponent }
//     ]
//   }
//   { path: '**', component: PageNotFoundComponent },
// ];

// @NgModule({
  ////   imports: [RouterModule.forChild(routes)], // forChild() para rutas hijas o secundarias.
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}