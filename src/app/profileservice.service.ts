import { Injectable } from "@angular/core";
import { Userprofile } from "./interfaces/userprofile";
@Injectable({
  providedIn: "root"
})
export class ProfileserviceService {
  userprofiles: Userprofile = {
    name: "Grant Flennoy",
    contact: "flennoyg@gmail.com",
    bio: "I like stuff"
  };
  constructor() {}
  getUserProfile() {
    return this.userprofiles;
  }
  setUserProfile(profile: Userprofile) {
    this.userprofiles = profile;
  }
}
