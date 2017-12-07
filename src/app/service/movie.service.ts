import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Movie } from '../models/movie';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  private apiUrlGetMovie: string = 'http://sv.myclass.vn/api/movie/getmovie';
  private apiUrlGetMovieDetailByGroup: string = 'http://sv.myclass.vn/api/movie/GetMovieDetailByGroup';

  constructor(private _http: Http) { }

  public LayDanhSachPhim(): Observable<any[]> {
    const obServe: Observable<any> = this._http.get(this.apiUrlGetMovie).map((result: Response) => result.json());
    return obServe;
  }

  public LayChiTietPhim_LichChieuTheoNhom(MaPhim: number, MaNhom: string): any {
    const obServe: Observable<any> = this._http.get(`${this.apiUrlGetMovieDetailByGroup}?id=${MaPhim}&groupID=${MaNhom}`)
    .map((result: Response) => result.json());
    return obServe;
  }
}
