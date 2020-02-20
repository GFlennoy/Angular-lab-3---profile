import { Component, OnInit } from "@angular/core";
import { ProfileserviceService } from "../profileservice.service";
import { Userprofile } from "../interfaces/userprofile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userProfile: Userprofile;
  constructor(private service: ProfileserviceService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
}
