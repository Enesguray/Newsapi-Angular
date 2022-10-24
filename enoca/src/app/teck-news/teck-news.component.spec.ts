import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeckNewsComponent } from './teck-news.component';

describe('TeckNewsComponent', () => {
  let component: TeckNewsComponent;
  let fixture: ComponentFixture<TeckNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeckNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeckNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
