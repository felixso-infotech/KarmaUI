import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivitiesPage } from './activities.page';
var routes = [
    {
        path: '',
        component: ActivitiesPage
    }
];
var ActivitiesPageModule = /** @class */ (function () {
    function ActivitiesPageModule() {
    }
    ActivitiesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ActivitiesPage]
        })
    ], ActivitiesPageModule);
    return ActivitiesPageModule;
}());
export { ActivitiesPageModule };
//# sourceMappingURL=activities.module.js.map