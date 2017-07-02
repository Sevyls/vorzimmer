import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublictransportComponent } from './publictransport.component';

describe('PublictransportComponent', () => {
  let component: PublictransportComponent;
  let fixture: ComponentFixture<PublictransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublictransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublictransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
