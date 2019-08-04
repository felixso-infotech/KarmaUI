import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FinishPage } from './finish.page';
var routes = [
    {
        path: '',
        component: FinishPage
    }
];
var FinishPageModule = /** @class */ (function () {
    function FinishPageModule() {
    }
    FinishPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FinishPage]
        })
    ], FinishPageModule);
    return FinishPageModule;
}());
export { FinishPageModule };
//# sourceMappingURL=finish.module.js.map