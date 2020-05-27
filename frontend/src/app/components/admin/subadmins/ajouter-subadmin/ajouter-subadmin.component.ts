import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Admin } from 'src/app/models/admin';
import { AdminsService } from 'src/app/services/admins.service';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-subadmin',
  templateUrl: './ajouter-subadmin.component.html',
  styleUrls: ['./ajouter-subadmin.component.scss']
})
export class AjouterSubadminComponent implements OnInit {
  addSubAdminForm: FormGroup;
  @ViewChild('success', { static: true }) success: ModalDirective;
  constructor(private adminsService: AdminsService, private router: Router) { }

  ngOnInit() {
    this.addSubAdminForm = new FormGroup({
      'nom': new FormControl(null, Validators.required),
      'prenom': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  addNewSubAdmin(): void {
    var newSubadmin = new Admin();
    newSubadmin.nom = this.addSubAdminForm.value.nom;
    newSubadmin.prenom=  this.addSubAdminForm.value.prenom;
    newSubadmin.email = this.addSubAdminForm.value.email;
    newSubadmin.motdepasse= this.addSubAdminForm.value.password;
    newSubadmin.role = "sub_admin";
    this.adminsService.addAdmin(newSubadmin).subscribe(
      () => {
        this.success.show();
        setTimeout (() => {
          this.init();
          this.success.hide();
          this.router.navigate(["/admin/subadmins"]);
       }, 3000);
      }
      );
  }

  init():void{
    this.addSubAdminForm.reset();
  }

}
