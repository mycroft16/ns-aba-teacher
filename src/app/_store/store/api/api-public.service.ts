import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiOptions } from '../../interfaces/api.interface';
import { IAppState } from '../app.store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
// import { show, hide } from '../loading-indicator/loading-indicator.actions';

@Injectable()
export class ApiPublicService {
    constructor(protected readonly http: HttpClient, protected readonly store: Store<IAppState>) { }

    public get<T>(controller: string, options: IApiOptions = {}): Observable<T> {
        return this.call<T>('GET', controller, options);
    }

    public post<T>(controller: string, options: IApiOptions = {}): Observable<T> {
        return this.call<T>('POST', controller, options);
    }

    public put<T>(controller: string, options: IApiOptions = {}): Observable<T> {
        return this.call<T>('PUT', controller, options);
    }

    public delete<T>(controller: string, options: IApiOptions = {}): Observable<T> {
        return this.call<T>('DELETE', controller, options);
    }

    //// END PUBLIC INTERFACE

    private call<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        controller: string,
        options: IApiOptions,
    ): Observable<T> {
        const selectedOptions: IApiOptions = this.combineDefaultOptionsWith(options);
        const requestOptions = {
            params: selectedOptions.params,
            body: selectedOptions.body,
            headers: selectedOptions.headers,
        };

        return this.http.request<T>(method, this.urlFor(controller), requestOptions);
    }

    private combineDefaultOptionsWith(options: IApiOptions): IApiOptions {
        return {
            params: {},
            body: null,
            loadingIndicator: false,
            headers: this.headers(options.headerType),
            ...options,
        };
    }

    private urlFor(controller: string) {
        return `https://aba-api.one-equality.com/v1/public/${controller}.php`;
    }

    private headers(headerType: string = 'json'): HttpHeaders {

        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');

        switch (headerType) {
        case 'json':
            headers = headers.set('Content-Type', 'application/json');
            headers = headers.set('Accept', 'application/json');
            break;
        case 'download':
            headers = headers.set('Accept', 'application/octet-stream');
            break;
        case 'form-urlencoded':
            headers = headers.set('Accept', 'application/json');
            headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
            break;
        case 'text':
            headers = headers.set('Content-Type', 'text/plain');
            break;
        default:
            headers = headers.set('Accept', 'application/json');
            break;
        }

        return headers;
    }
}
