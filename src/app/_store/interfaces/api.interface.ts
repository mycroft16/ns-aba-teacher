import { HttpHeaders } from '@angular/common/http';

export interface IApiParameters {
  [key: string]: string | number;
}

export interface IApiBody {
  [key: string]: any;
}

export interface IApiResponse {
  [key: string]: any;
}

export interface IApiErrorResponse {
  status: number | string;
  // tslint:disable-next-line: ban-types
  json?: Function;
}

export type LoadingIndicatorOption = boolean | 'onBeforeRequest' | 'offAfterResponse';

export interface IApiOptions {
  params?: any;
  body?: IApiBody;
  headers?: HttpHeaders;
  loadingIndicator?: LoadingIndicatorOption;
  headerType?: string;
}
