import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusinessModalComponent } from './create-business-modal.component';

describe('CreateBusinessModalComponent', () => {
  let component: CreateBusinessModalComponent;
  let fixture: ComponentFixture<CreateBusinessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBusinessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBusinessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
