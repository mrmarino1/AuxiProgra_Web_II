import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Albumes de Artistas';
  nuevoArtista = '';
  artistas = [
    { nombre: 'Latin Mafia', album: 'TODOS LOS DÍAS TODO EL DÍA', favorito: false },
    { nombre: 'Ed Maverick', album: 'eduardo', favorito: true },
    { nombre: 'Bratty', album: 'HOSHI', favorito: false }
  ];
  agregar() {
    if (this.nuevoArtista.trim()) {
      this.artistas.push({
        nombre: this.nuevoArtista,
        album: 'vacio',
        favorito: false
      });
      this.nuevoArtista = '';
    }
  }
  eliminar(indice: number) {
    this.artistas.splice(indice, 1);
  }
}