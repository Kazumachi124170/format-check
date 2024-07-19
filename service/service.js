// An interface for service functions
export class serviceImplement{
  service(){}
}

export class serviceError extends Error{
  constructor(message) {
    super(message);
    this.name = "serviceError";
  }
}


