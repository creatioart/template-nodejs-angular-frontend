/**
 * User Model
 */
export class UserModel {

  public id: string;

  // Constructor Overloading
  constructor();
  constructor(id: string);
  constructor(id?: string) {
    this.id = id ?? '';
  }
}
