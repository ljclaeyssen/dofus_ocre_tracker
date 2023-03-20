import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchisComponent } from './archis.component';

describe('ArchisComponent', () => {
  let component: ArchisComponent;
  let fixture: ComponentFixture<ArchisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
