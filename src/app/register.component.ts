/**
 * Created by Palko on 06/11/2016.
 */

import {Component} from "@angular/core/src/metadata/directives";
@Component({
  selector:'my-register',
  template:`
<div class="container">
<div class="form-group">
  <label for="email">Email</label>
  <input type="text" class="form-control" id="email" required minlength="6" maxlength="24" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"
  [(ngModel)]="email" name="email" #name="ngModel">

  <div *ngIf="name.errors && (name.dirty || name.touched)"  class="alert alert-danger">
  
  <div [hidden]="!name.errors.required">
     Name is required
  </div>
  <div [hidden]="!name.errors.minlength">
     Name must be at least 6 characters long.
  </div>
  <div [hidden]="!name.errors.maxlength">
     Name cannot be more than 24 characters long.
  </div>
  <div [hidden]="!name.errors.pattern">
     Please enter emaial in right format(yyyy@yyyy.yy)
  </div>
</div>
      <div class="form-group">
  <label for="password">Password</label>
  <input type="password" class="form-control" id="password" required minlength="6" maxlength="24" pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
  [(ngModel)]="password" a="password" #a="ngModel">
  <div *ngIf="a.errors && (a.dirty || a.touched)"  class="alert alert-danger">
  <div [hidden]="!a.errors.required">
     Name is required
  </div>
  <div [hidden]="!a.errors.minlength">
     Name must be at least 6 characters long.
  </div>
  <div [hidden]="!a.errors.maxlength">
     Name cannot be more than 24 characters long.
  </div>
    <div [hidden]="!a.errors.pattern">
    Include one capital and one number character
  </div>
  </div>
      </div>
      
      <div class="form-group">
  <label for="fullname">Name</label>
  <input type="text" class="form-control" id="fullname" required minlength="6" maxlength="24"
  [(ngModel)]="fullname" b="fullname" #b="ngModel">
   <div *ngIf="b.errors && (b.dirty || b.touched)"  class="alert alert-danger"> 
   <div [hidden]="!b.errors.minlength">
     Name must be at least 6 characters long.
  </div>
  <div [hidden]="!b.errors.maxlength">
     Name cannot be more than 24 characters long.
  </div>
   </div>
  <button type="button" class="btn btn-success">Submit</button>
  </div>
</div>
  </div>

`,
  styles:[`
  .btn{
   margin-top: 10px;
   }`]

})

export class RegisterComponent{

}
