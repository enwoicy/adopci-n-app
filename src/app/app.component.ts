import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  // 👇 Aquí importamos FormsModule correctamente
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Adopción de Mascotas 🐾';

  nombre = '';
  descripcion = '';
  imagen = '';

  mascotas = [
    {
      nombre: 'Rocky',
      descripcion: 'Un perrito juguetón que ama correr en el parque.',
      imagen: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800'
    },
    {
      nombre: 'Luna',
      descripcion: 'Una gatita curiosa y muy tierna que busca un hogar amoroso.',
      imagen: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800'
    }
  ];

  agregarMascota() {
    if (this.nombre.trim() && this.descripcion.trim() && this.imagen.trim()) {
      this.mascotas.push({
        nombre: this.nombre,
        descripcion: this.descripcion,
        imagen: this.imagen
      });
      this.nombre = '';
      this.descripcion = '';
      this.imagen = '';
      alert('¡Mascota agregada con éxito! 🐾');
    } else {
      alert('Por favor llena todos los campos antes de agregar una mascota 🐶🐱');
    }
  }
}