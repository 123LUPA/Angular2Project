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
  <input type="text" class="form-control" id="email" required
  [(ngModel)]="email" name="email" #name="ngModel">
  <div [hidden]="name.valid || name.pristine" class="alert alert-danger">Name required</div>
</div>
      <div class="form-group">
  <label for="password">Password</label>
  <input type="text" class="form-control" id="password">

      </div>
      
      <div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name">
  <button type="button" class="btn btn-success">Submit</button>
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
