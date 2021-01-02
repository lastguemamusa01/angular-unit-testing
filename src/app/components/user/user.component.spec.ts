import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {UserServiceMock} from '../../mocks/user.service.mock';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService, useClass: UserServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one user`, waitForAsync(() => {
    expect(component.users.length).toEqual(1);
  }));

  it(`html should render one user`, waitForAsync(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user1');
  }));

});
