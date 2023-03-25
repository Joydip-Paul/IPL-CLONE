import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  teamList: any = [];
  private subs = new SubSink;
  
  constructor(
    private teamService: ApiService
  ) {
    this.getTeamList();
  }

  getTeamList(): void {
    this.subs.sink = this.teamService.getAllTeamApi().subscribe((res:any)=>{
      if(res.length){
        this.teamList = res;
        console.log(res);
      }
    })
  }
}
