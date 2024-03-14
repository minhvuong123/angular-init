import { Injectable } from "@angular/core";

@Injectable()
export class ServersService {
  constructor() { }

  getServer(id: string): {id: number, name: string, status: string} {
    return {
      id: 1, name: 'name', status: 'status'
    }
  }
}