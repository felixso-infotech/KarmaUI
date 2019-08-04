import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WelcomeSlidesPage } from './welcome-slides.page';
var routes = [
    {
        path: '',
        component: WelcomeSlidesPage
    }
];
var WelcomeSlidesPageModule = /** @class */ (function () {
    function WelcomeSlidesPageModule() {
    }
    WelcomeSlidesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WelcomeSlidesPage]
        })
    ], WelcomeSlidesPageModule);
    return WelcomeSlidesPageModule;
}());
export { WelcomeSlidesPageModule };
//# sourceMappingURL=welcome-slides.module.js.map