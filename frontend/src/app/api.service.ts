import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient){
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'Access-Control-Allow-Headers');


  }

  addStudent(data){
    return this.http.post('http://localhost/ITPEL2CRUD_OE6/backend/create.php', data);
  }

  getStudents(){
    return this.http.get('http://localhost/ITPEL2CRUD_OE6/backend/getstudents.php');
  }

  deleteStudent(id){
    return this.http.delete('http://localhost/ITPEL2CRUD_OE6/backend/delete.php?id='+id);
  }
}


