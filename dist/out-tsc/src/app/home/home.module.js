import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxWheelModule } from 'ngx-wheel';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
var routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'activities',
        loadChildren: '../activities/activities.module#ActivitiesPageModule'
    },
    {
        path: 'finish',
        loadChildren: '../finish/finish.module#FinishPageModule'
    },
    {
        path: 'gratitude-challenge/:id',
        children: [
            {
                path: '',
                loadChildren: '../gratitude-challenge/gratitude-challenge.module#GratitudeChallengePageModule'
            }
        ]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                NgxWheelModule
            ],
            declarations: [HomePage]
        })
    ], HomePageModule);
    return HomePageModule;
}());
export { HomePageModule };
//# sourceMappingURL=home.module.js.map