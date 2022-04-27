import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillMailComponent } from './kill-mail.component';

describe('KillMailComponent', () => {
  let component: KillMailComponent;
  let fixture: ComponentFixture<KillMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KillMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
