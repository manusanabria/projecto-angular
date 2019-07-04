import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  Post: any = [];

  constructor(
    public apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.cargarPosts();
  }

  regresar() {
    this.cargarAutor();
    this.cargarPosts();
  }

  // Obtener Posts
  cargarPosts() {
    return this.apiService.getPosts().subscribe((data: {}) => {
      this.Post = data;
      console.log(data);
    });
  }

  // Previos Posts
  previosPosts() {
    this.cargarPosts();
  }

  // Siguientes Posts
  siguentesPost() {
    return this.apiService.getnextPosts().subscribe((data: {}) => {
      this.Post = data;
      console.log(data);
    });
  }

  // Cargar Autores
  cargarAutor() {
    return this.apiService.getPosts().
      subscribe((data: any) => {
        this.Post = data;
        console.log(data);
      });
  }

  // Mostrar Posts orden Ascendente
  changeOrderAsc() {
    return this.apiService.changeOrderAsc()
      .subscribe((data: {}) => {
        this.Post = data;
        console.log(data);
      });
  }

  // Mostrar Posts orden Descendente
  changeOrderDesc() {
    return this.apiService.changeOrderDesc()
      .subscribe((data: {}) => {
        this.Post = data;
        console.log(data);
      });
  }

  // Mostrar Posts por Autor
  mostrarPosts(id: any) {
    return this.apiService.getByAutor(id)
      .subscribe((data: {}) => {
        this.Post = data;
        console.log(id);
      });

  }


}





