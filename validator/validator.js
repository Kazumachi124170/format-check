// An interface for validation functions
export class validateCheck{
  isExist(){}
  isValid(){}
}

export class validateError extends Error{
  constructor(message) {
    super(message);
    this.name = "validateError";
  }
}