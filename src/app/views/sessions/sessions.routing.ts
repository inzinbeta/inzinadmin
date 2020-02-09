
import { Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component";

import { Signin4Component } from './signin4/signin4.component';


export const SessionsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: "signin",
        component: Signin4Component,
        data: { title: "Signin" }
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: { title: "Not Found" }
      },
      {
        path: "error",
        component: ErrorComponent,
        data: { title: "Error" }
      }
    ]
  }
];
