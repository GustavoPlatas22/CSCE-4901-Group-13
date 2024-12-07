import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.sass'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth) {}
    signup() {
      this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log('Signup successful:', user);
        })
        .catch((error) => {
          console.error('Error during signup:', error);
        });
    }
} 