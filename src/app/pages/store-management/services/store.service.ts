import { Injectable } from '@angular/core';

import { CrudService } from '../../shared/services/crud.service';
import { Observable } from 'rxjs';
import { SocialNetworks } from '../models/social-networks';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private crudService: CrudService) {
  }

  getStore(): Observable<any> {
    return this.crudService.get(`/v1/store/DEFAULT`);
  }

  getListOfStores(): Observable<any> {
    const params = {
      'lenght': '100',
      'start': '0'
    };
    return this.crudService.get(`/v1/private/stores`, params);
  }

  checkIfStoreExist(code): Observable<any> {
    const params = {
      'code': code,
    };
    return this.crudService.get(`/v1/private/store/unique`, params);
  }

  createStore(store: any): Observable<any> {
    return this.crudService.post(`/v1/private/store`, store);
  }

  deleteStore(storeCode: any): Observable<any> {
    return this.crudService.delete(`/v1/private/store/${ storeCode }`);
  }

  updateStore(store: any): Observable<any> {
    return this.crudService.put(`/v1/private/store/${ store.code }`, store);
  }

  getBrandingDetails(): Observable<any> {
    const code = 'DEFAULT';
    return this.crudService.get(`/v1/private/store/${code}/marketing`);
  }

  updateSocialNetworks(body): Observable<any> {
    const code = 'DEFAULT';
    return this.crudService.post(`/v1/private/store/${code}/marketing`, body);
  }

  addStoreLogo(file: any): Observable<any> {
    const code = 'DEFAULT';
    const uploadData = new FormData();
    uploadData.append('file', file, file.name);
    return this.crudService.post(`/v1/private/store/${code}/marketing/logo`, uploadData);
  }


}
