import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFireReportComponent } from './create-fire-report.component';

describe('CreateFireReportComponent', () => {
  let component: CreateFireReportComponent;
  let fixture: ComponentFixture<CreateFireReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFireReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFireReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
