import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;

  constructor() {
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.name = "John Doe";
    this.age = 30;
    this.email = 'test@test.com';
    this.address = {
      street: '13 main st.',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ["write code", "watch movies", "listen to music"];
    this.hello = 'hello';
  }

  onClick() {
    // console.log("button clicked - typescript");
    this.name = "Brad Traversy";
  }

  formSubmit(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}