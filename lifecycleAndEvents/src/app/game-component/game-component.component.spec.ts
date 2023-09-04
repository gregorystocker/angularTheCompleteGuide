import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponentComponent } from './game-component.component';

describe('GameComponentComponent', () => {
  let component: GameComponentComponent;
  let fixture: ComponentFixture<GameComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponentComponent]
    });
    fixture = TestBed.createComponent(GameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
