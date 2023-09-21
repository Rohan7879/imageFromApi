import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'fetchPipe',
})
export class FetchPipePipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  transform(url: string, ...args: any[]): any {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        return objectUrl;
      })
    );
  }
}
