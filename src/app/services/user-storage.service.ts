import { Injectable } from '@angular/core';

@Injectable()

export class UserStorageService {
  init(user: string) {
    // !!!CHANGE TO THIS WHENEVER THERE'S FUNCTIONAL LOGIN!!!
    
    if (!this.exists()) {
      localStorage.setItem("user", user);
      console.log("localStorage: " + localStorage.getItem("user"))
    }
    //localStorage.setItem("user", user);
  }

  exists() {
    return localStorage.getItem("user") !== null;
  }

  get() {
    if (!this.exists()) throw new Error("user does not exist.");
    return localStorage.getItem("user");
  }

  getID() {
    if (!this.exists()) throw new Error("id does not exist.");
    return localStorage.getItem("id");
  }

  getAf(){
    if (!this.exists()) throw new Error("id does not exist.");
    return localStorage.getItem("af");
  }

  getCart(){
    if (!this.exists()) throw new Error("id does not exist.");
    return localStorage.getItem("cart");
  }

  getOrderStatus() {
    if (!this.exists()) throw new Error("status does not exist.");
    return localStorage.getItem("status");
  }

  set(user: string) {
    if (!this.exists()) throw new Error("user does not exist.");
    localStorage.setItem("user", user);
  }

  setID(id: string) {
    if (!this.exists()) throw new Error("id does not exist.");
    localStorage.setItem("id", id);
  }

  setAf(id:string) {
    if (!this.exists()) throw new Error("id does not exist.");
    localStorage.setItem("af", id);
  }
  
  setCart(id:string) {
    if (!this.exists()) throw new Error("id does not exist.");
    localStorage.setItem("cart", id);
  }
  
  setOrderStatus(status: string) {
    if (!this.exists()) throw new Error("status does not exist.");
    localStorage.setItem("status", status);
  }
}
