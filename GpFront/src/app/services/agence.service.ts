import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private apiUrl = `${environment.apiUrl}agentgp/agence` // URL de l'API

  constructor(private http: HttpClient) {}


  getAgences(depart: string, destination: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?depart=${depart}&destination=${destination}`);
  }

  suivreAgent(utilisateurId: number, agentId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}suivi/suivre/${utilisateurId}/${agentId}`, {});
  }

  arreterSuivreAgent(utilisateurId: number, agentId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}suivi/arreter/${utilisateurId}/${agentId}`, {});
  }

  getAgentsSuivis(utilisateurId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}suivi/agents-suivis/${utilisateurId}`);
  }

}
