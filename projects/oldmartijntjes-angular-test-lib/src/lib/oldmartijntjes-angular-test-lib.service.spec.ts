import { TestBed } from '@angular/core/testing';

import { OldmartijntjesAngularTestLibService } from './oldmartijntjes-angular-test-lib.service';

describe('OldmartijntjesAngularTestLibService', () => {
  let service: OldmartijntjesAngularTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldmartijntjesAngularTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
