import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private MovieDetail: any = {};
  private MovieID: number;
  private MaNhom: any;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
  }

}
