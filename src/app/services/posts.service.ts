import { Injectable } from '@angular/core';
import { Posts } from '../models/Posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // getPosts() {
  //   return this.http.get<Posts[]>('http://localhost:3000/post?_sort=fecha&_order=desc');
  // }

  // getPostsByAutor() {
  //   return this.http.get<Posts[]>('http://localhost:3000/post/?nombre=Autor');
  // }

}
