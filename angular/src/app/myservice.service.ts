import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{user} from 'src/app/user';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public httpItem:HttpClient) { }
  LookfforUser(u:user)
{
  // debugger;
    return this.httpItem.post<user>("http://localhost:50843/api/User/LookForUser",u);
  }
insert(u:user){
  return this.httpItem.post<user>("http://localhost:50843/api/User/insert",u);
}
  registerMe(user:user)
  {
    return this.httpItem.get<void>("http://localhost:50843/api/User/insert?u="+user);
  }
 

}
