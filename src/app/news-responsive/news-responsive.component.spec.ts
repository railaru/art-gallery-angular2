import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsResponsiveComponent } from './news-responsive.component';

describe('NewsResponsiveComponent', () => {
  let component: NewsResponsiveComponent;
  let fixture: ComponentFixture<NewsResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
