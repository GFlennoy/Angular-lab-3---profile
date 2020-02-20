import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProfileserviceService } from "../profileservice.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor(
    private service: ProfileserviceService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {}

  add(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.routerInstance.navigate(["profile"]);
  }
}
