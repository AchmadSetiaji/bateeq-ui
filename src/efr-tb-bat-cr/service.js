import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../rest-service';
 
// const serviceUri = 'http://localhost:9080/v1/inventories/docs/efr-tb-bat';
const serviceUri = require('../host').inventory + '/docs/efr-tb-bat';
const serviceOutUri = require('../host').inventory + '/docs/efr-kb-bat';
const serviceUriStorages=require('../host').inventory + '/storages';
 
export class Service extends RestService{

  constructor(http, aggregator) {
      super(http, aggregator);
  }

  search(keyword) {
      return super.get(serviceUri);
  }

  getById(id)
  {
      var endpoint = `${serviceUri}/${id}`;
      return super.get(endpoint);
  }
  
  create(data)
  {
      var endpoint = `${serviceUri}`;
      return super.post(endpoint, data);
  } 
  
  searchPending(){
      var endpoint = `${serviceUri}/pending`;
      return super.get(endpoint);
  }

  getPendingSPKById(id){
      var endpoint = `${serviceUri}/pending/${id}`;
      return super.get(endpoint);
  }
}