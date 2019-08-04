import { TestBed } from '@angular/core/testing';
import { KarmaAppService } from './karma-app.service';
describe('KarmaAppServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(KarmaAppService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=karma-app.service.spec.js.map