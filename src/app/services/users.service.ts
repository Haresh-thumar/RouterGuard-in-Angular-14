import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers() {
    return [
      { id: 1, name: 'John Duo', city: 'Delhi', mobile: 8899235614, email: 'john@gmail.com', salery: 15000 },
      { id: 2, name: 'Peter San', city: 'Pune', mobile: 9797616134, email: 'pete@gmail.com', salery: 20000 },
      { id: 3, name: 'Omed Vas', city: 'Goa', mobile: 9955337755, email: 'omed@gmail.com', salery: 25000 },
      { id: 4, name: 'Kunal Patel', city: 'Mumbai', mobile: 9494663325, email: 'kunal@gmail.com', salery: 30000 },
      { id: 5, name: 'Haresh Patel', city: 'Rajkot', mobile: 8844635241, email: 'haresh@gmail.com', salery: 35000 },
      { id: 6, name: 'Rutvik Patel', city: 'Junagadh', mobile: 7979868652, email: 'rutvik@gmail.com', salery: 40000 },
    ]
  }

}
