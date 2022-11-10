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

  set(user: string) {
    if (!this.exists()) throw new Error("user does not exist.");
    localStorage.setItem("user", user);
  }
}
