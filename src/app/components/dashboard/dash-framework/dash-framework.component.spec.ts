import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFrameworkComponent } from './dash-framework.component';

describe('DashFrameworkComponent', () => {
  let component: DashFrameworkComponent;
  let fixture: ComponentFixture<DashFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashFrameworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
