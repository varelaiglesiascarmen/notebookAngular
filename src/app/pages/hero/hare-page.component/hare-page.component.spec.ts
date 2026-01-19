import { HarePageComponent } from './hare-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HarePageComponent', () => {
  let component: HarePageComponent;
  let fixture: ComponentFixture<HarePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
