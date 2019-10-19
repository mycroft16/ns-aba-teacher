import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable, of } from 'rxjs';
import { IStudent } from '../../interfaces/students.interface';

@Injectable()
export class StudentsService {
    constructor(private apiService: ApiService) { }

    public fetchStudents(userId: number): Observable<IStudent[]> {
        return this.apiService.get(
            'Students/FetchStudents',
            {
                params: {
                    userId,
                },
            },
        );
    }
}
