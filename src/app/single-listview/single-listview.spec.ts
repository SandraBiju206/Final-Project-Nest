import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListview } from './single-listview';

describe('SingleListview', () => {
  let component: SingleListview;
  let fixture: ComponentFixture<SingleListview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleListview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleListview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
