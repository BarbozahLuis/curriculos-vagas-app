// Importa os módulos necessários
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './model/vaga.model';
@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private apiUrl = 'http://localhost:3000/vagas'; // Caminho para oarquivo JSON (banco de dados)

  constructor(private http: HttpClient) { }// criando o objeto http q tem alguns metodos imbutidos
  // Obtém a lista de vagas a partir do arquivo JSON
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);//utilizar o metodo get pra pegar as informações do banco e guarda dentro de um vetor
  }

  // Cadastra uma nova vaga no servidor
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga); //http é obj e o post o metodo
  }

  // Atualiza uma vaga existente no servidor
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizar, vaga);//metodo put vai buscar uma vaga a partir do id e atualizar a vaga com as informações
  }

  // Remove uma vaga do servidor
  removerVaga(id: any): Observable<Vaga[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);//delete serve pra remover a vaga
  }
}
