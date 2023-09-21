import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  imageUrl: string = 'https://source.unsplash.com/user/rohan7883/1710x1107';

  // 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29';
  // 'https://api.unsplash.com/photos/?rohan7883=urn:ietf:wg:oauth:2.0:oob';
  // 'https://images.unsplash.com/photo-1692532560357-ff67799c921a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTI3OTU1NA&ixlib=rb-4.0.3&q=80&w=800';

  // imageUrl$: string = 'assets/1.jpg';
}
