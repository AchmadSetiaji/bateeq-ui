import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class List {
    data = [];
    listReport = [
        "95900424-d409-42c7-914a-1673b1d4acfa",//	Top 10 Jenis Aksesoris Per Kota – 2 Quarter Terakhir
        "6b6d6327-10a8-424a-af07-7d6407e100ba",//	Top 10 Jenis Aksesoris Per Toko – 2 Quarter Terakhir 
    ];
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    activate() {
        this.service.search('')
            .then(data => {
                 for (var report of this.listReport) {
                    var _data = data.find((_data) => _data.id === report);
                    if (_data) {
                        this.data.push(_data);
                    }
                }
            })
    }

    view(data) {
        this.router.navigateToRoute('view', { id: data.id });
    }
}
