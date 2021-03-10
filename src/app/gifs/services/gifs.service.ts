import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShearchGifsResponse, Gif } from '../interfaces/gits.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private apiKey : string = 'IIg3DfgBsfMEUIk5mPG6GMTuoNtZWJpl';
  private _historial : string[] = [];
  private _serviciosUrl : string = 'https://api.giphy.com/v1/gifs';

  //TODO-CAMBIAR ANY POR SU TIPO 
  public resultados : Gif[] = [];
  get historial(){
    return [...this._historial];
  }

  constructor(private http : HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [] ;
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  bucarGifs( query : string ){
    query = query.toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
    this._historial = this._historial.splice(0,10)

      localStorage.setItem('historial' , JSON.stringify(this._historial));
    }

    const param = new HttpParams()
                                  .set('api_key' , this.apiKey)
                                  .set('q' , query)
                                  .set('limit' , '10');
  //  console.log(param.toString());

    this.http.get<ShearchGifsResponse>(`${this._serviciosUrl}/search` , {params : param} )
              .subscribe(
                respuesta =>{
                  console.log(respuesta.data);
                  this.resultados = respuesta.data;
                  localStorage.setItem('resultados' , JSON.stringify(this.resultados));
                }
              )

  }
}



    /*
    esta seria una manera de trabajar con lo que son los fetch y traer datos de nuestra api.

    fetch('https://api.giphy.com/v1/gifs/search?api_key=IIg3DfgBsfMEUIk5mPG6GMTuoNtZWJpl&q=dbz&limit=10').then(
      resp =>{
        resp.json().then(
          data =>{
            console.log(data)
          }
        )
      }
    )
    
    */