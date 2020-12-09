import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Post } from './post.model'

describe('DataService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,HttpClientModule],
        providers: [DataService, HttpClientModule]
    }));

    it('created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });

    it('working => getData function', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service.getPostData).toBeTruthy();
    });



});


