import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Import this!

@Component({
  selector: 'app-root',
  standalone: true,          // important for new Angular
  imports: [RouterModule],   // <-- Add RouterModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
