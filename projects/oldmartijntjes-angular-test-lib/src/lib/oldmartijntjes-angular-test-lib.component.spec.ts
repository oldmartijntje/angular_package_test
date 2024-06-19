import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldmartijntjesAngularTestLibComponent } from './oldmartijntjes-angular-test-lib.component';

describe('OldmartijntjesAngularTestLibComponent', () => {
  let component: OldmartijntjesAngularTestLibComponent;
  let fixture: ComponentFixture<OldmartijntjesAngularTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldmartijntjesAngularTestLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldmartijntjesAngularTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
