import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      'https://app-educamus.herokuapp.com/postagem',
      this.token
    );
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(
      `https://app-educamus.herokuapp.com/postagem/${id}`,
      this.token
    );
  }

  postPostagem(post: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'https://app-educamus.herokuapp.com/postagem',
      post,
      this.token
    );
  }

  putPostagem(post: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(
      'https://app-educamus.herokuapp.com/postagem',
      post,
      this.token
    );
  }

  deletePostagem(id: number) {
    return this.http.delete(
      `https://app-educamus.herokuapp.com/postagem/${id}`,
      this.token
    );
  }
}