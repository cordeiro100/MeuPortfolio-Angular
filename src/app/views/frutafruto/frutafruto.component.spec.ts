import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutafrutoComponent } from './frutafruto.component';

describe('FrutafrutoComponent', () => {
  let component: FrutafrutoComponent;
  let fixture: ComponentFixture<FrutafrutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutafrutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutafrutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
