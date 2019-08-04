import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GratitudeChallengePage } from './gratitude-challenge.page';
var routes = [
    {
        path: '',
        component: GratitudeChallengePage
    }
];
var GratitudeChallengePageModule = /** @class */ (function () {
    function GratitudeChallengePageModule() {
    }
    GratitudeChallengePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GratitudeChallengePage]
        })
    ], GratitudeChallengePageModule);
    return GratitudeChallengePageModule;
}());
export { GratitudeChallengePageModule };
//# sourceMappingURL=gratitude-challenge.module.js.map