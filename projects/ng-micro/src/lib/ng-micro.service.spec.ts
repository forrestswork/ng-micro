import { TestBed } from '@angular/core/testing';

import { NgMicroService } from './ng-micro.service';

describe('NgMicroService', () => {
  let service: NgMicroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMicroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
