import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        console.log('Login successful:', user);
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  }
}
