import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryJobsComponent } from './industry-jobs.component';

describe('IndustryJobsComponent', () => {
  let component: IndustryJobsComponent;
  let fixture: ComponentFixture<IndustryJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
