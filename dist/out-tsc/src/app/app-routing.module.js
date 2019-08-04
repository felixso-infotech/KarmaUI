import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'tabs', pathMatch: 'full' },
    { path: 'activities', loadChildren: './activities/activities.module#ActivitiesPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'finish', loadChildren: './finish/finish.module#FinishPageModule' },
    { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },
    { path: 'gratitude-challenge/:id', loadChildren: './gratitude-challenge/gratitude-challenge.module#GratitudeChallengePageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
    { path: 'albums', loadChildren: './albums/albums.module#AlbumsPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'welcome-slides', loadChildren: './welcome-slides/welcome-slides.module#WelcomeSlidesPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map