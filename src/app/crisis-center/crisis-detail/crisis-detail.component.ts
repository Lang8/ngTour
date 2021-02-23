import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Crisis } from '../crisis';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getCrisis(params.get('id')))
    );
  }

  gotoCrises(crisis: Crisis){
    const CrisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', {id: CrisisId, foo:'foo'}],{relativeTo: this.route});
  }

}