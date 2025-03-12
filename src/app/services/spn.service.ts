import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Spn } from '../models/spn';

@Injectable({
  providedIn: 'root'
})
export class SpnService {
  private readonly apiUrl = 'http://localhost:8888/spn';

  constructor(private httpClient: HttpClient) { }

  fetchSpnService(): Observable<Spn[]> {
    const spnObservable: Observable<any>
      = this.httpClient.get<HttpResponse<SpnApiResponse>>(this.apiUrl, {observe: 'response'});
    return spnObservable.pipe(
      tap((response: HttpResponse<SpnApiResponse>) => console.info('Spn from server', response)),
      map(response => response.body),
      map(responseFromServer => responseFromServer as unknown as Spn[])
    )
  }
}

interface SpnApiResponse {
  body: Spn[]
}

