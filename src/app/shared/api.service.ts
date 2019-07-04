import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Post } from '../shared/post';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    // Definir Url API
    apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post> {
        return this.http.get<Post>(this.apiURL + '/posts' + '?_page=1&_limit=10&_sort=fecha&_order=desc')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getnextPosts(): Observable<Post> {
        return this.http.get<Post>(this.apiURL + '/posts' + '?_page=2&_sort=fecha&_order=desc')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getByAutor(id: any): Observable<Post> {
        return this.http.get<Post>(this.apiURL + '/posts' + '?id=' + id);
    }

    changeOrderAsc(): Observable<Post> {
        return this.http.get<Post>(this.apiURL + '/posts' + '?_page=1&_limit=10&_sort=fecha&_order=asc')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    changeOrderDesc(): Observable<Post> {
        return this.http.get<Post>(this.apiURL + '/posts' + '?_page=1&_limit=10&_sort=fecha&_order=desc')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Eror del lado del Cliente
            errorMessage = error.error.message;
        } else {
            // Error del lado del Servidor
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
