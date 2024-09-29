import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteComponentComponent } from './color-palette-component.component';

describe('ColorPaletteComponentComponent', () => {
  let component: ColorPaletteComponentComponent;
  let fixture: ComponentFixture<ColorPaletteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPaletteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPaletteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
