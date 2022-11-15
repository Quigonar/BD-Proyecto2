import { EventEmitter, Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';


@Injectable()
export class RouteService {
  public onUserChange = new EventEmitter<string>();

  constructor(private storage: UserStorageService) { 
    storage.init("login")
  }

  switch(user: string, id:string) {
    console.log("switching to: " + user)
    this.storage.set(user)
    this.storage.setID(id)
    this.onUserChange.emit(user)
  }

  /*setOrderStatus(status:string) {
    this.storage.setOrderStatus(status)
    this.onUserChange.emit(user)
  }*/

  /*userOrderStatus() {
    return this.storage.getOrderStatus()
  }*/

  userID(){
    return this.storage.getID()
  }

  userLogged() {
    return this.storage.get()
  }
}