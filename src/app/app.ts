import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  collegename="Amal Jyothi"
  person={
    name : 'Sandra Anna Biju',
    Email : 'sandra@12345',
    PhoneNo :'1234567890'
  }
  protected readonly title = signal('fourthproject');
}
