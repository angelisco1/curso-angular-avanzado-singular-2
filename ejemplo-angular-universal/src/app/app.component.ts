import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import jwtDecode from 'jwt-decode'
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false
  nombre: string = ''
  title = 'ejemplo-angular-universal';
  levels = [
    'In Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega',
    'Armor',
    'Fresh',
  ]

  constructor(private apiService: ApiService, private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.isLoggedIn$
      .subscribe((token: any) => {
        if (token) {
          const payload: any = jwtDecode(token)
          this.nombre = payload.name
          this.loggedIn = true
        } else {
          this.nombre = ''
          this.loggedIn = false
        }
      })
  }

  login(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    const datosLogin = {
      username: usernameInput.value,
      password: passwordInput.value
    }

    this.apiService.login(datosLogin)
      .subscribe((data: any) => {
        const token = data.jwt
        this.tokenService.setToken(token)
      })

  }

  logout() {
    this.tokenService.delToken()
  }

  getDatos() {
    this.apiService.getDatosApi()
      .subscribe((datos: any) => {
        alert(datos)
      })
  }
}
