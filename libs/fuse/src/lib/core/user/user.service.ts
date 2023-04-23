import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from './user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value: User) {
    // Store the value
    this._user.next(value);
  }

  get user$(): Observable<User> {
    this._user.next({
      avatar: 'assets/images/avatars/brian-hughes.jpg',
      email: 'hughes.brian@company.com',
      id: 'cfaad35d-07a3-4447-a6c3-d8c3d54fd5df',
      name: 'Brian Hughes',
      status: 'online',
    });
    return this._user.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current logged in user data
   */
  get(): Observable<User> {
    return this._httpClient.get<User>('api/common/user').pipe(
      tap(user => {
        this._user.next(user);
      }),
    );
  }

  /**
   * Update the user
   *
   * @param user
   */
  update(user: User): Observable<any> {
    return this._httpClient.patch<User>('api/common/user', { user }).pipe(
      map(response => {
        this._user.next(response);
      }),
    );
  }
}
