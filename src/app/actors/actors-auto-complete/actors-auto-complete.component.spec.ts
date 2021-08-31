import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsAutoCompleteComponent } from './actors-auto-complete.component';

describe('ActorsAutoCompleteComponent', () => {
  let component: ActorsAutoCompleteComponent;
  let fixture: ComponentFixture<ActorsAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
