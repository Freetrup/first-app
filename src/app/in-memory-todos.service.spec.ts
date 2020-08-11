import { TestBed } from '@angular/core/testing';

import { InMemoryTodosService } from './in-memory-todos.service';

describe('InMemoryTodosService', () => {
  let service: InMemoryTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
