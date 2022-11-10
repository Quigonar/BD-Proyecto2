import { EventEmitter, Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';


@Injectable()
export class RouteService {
  public onUserChange = new EventEmitter<string>();

  constructor(private storage: UserStorageService) { 
    storage.init("login")
  }

  switch(user: string) {
    console.log("switching to: " + user)
    this.storage.set(user)
    this.onUserChange.emit(user)
  }

  userLogged() {
    return this.storage.get();
  }
}