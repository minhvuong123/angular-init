import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenContentComponent } from './children-content.component';

describe('ChildrenContentComponent', () => {
  let component: ChildrenContentComponent;
  let fixture: ComponentFixture<ChildrenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildrenContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildrenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
