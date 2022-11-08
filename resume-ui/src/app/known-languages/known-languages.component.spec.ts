import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownLanguagesComponent } from './known-languages.component';

describe('KnownLanguagesComponent', () => {
  let component: KnownLanguagesComponent;
  let fixture: ComponentFixture<KnownLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnownLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnownLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
