import { TestBed } from '@angular/core/testing';
import { ActivityService } from './activity.service';
describe('ActivityService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ActivityService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=activity.service.spec.js.map