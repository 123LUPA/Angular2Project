/**
 * Created by krysn on 08.11.2016.
 */
/**
 * Created by Palko on 08/11/2016.
 */
/**
 * Created by Palko on 06/11/2016.
 */
import {Component} from "@angular/core/src/metadata/directives";
@Component({
    selector:'my-login',
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
  <input type="password" class="form-control" id="password">
  <button type="button" class="btn btn-success">Submit</button>

      </div>
</div>
`,

    styles:[`
   .btn{
   margin-top: 10px;
   }

  `

    ]
})


export class LoginComponent{

}