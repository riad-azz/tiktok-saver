export class ServerException extends Error {
  code: number;
  /**
   * @param message
   * @param code
   */
  constructor(message = "Tiktok Saver Exception", code = 500) {
    super(message);
    this.code = code;
  }
}

/* Server Exceptions */

export class BadRequest extends ServerException {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Bad Request", code = 400) {
    super(message, code);
  }
}

export class ServerError extends ServerException {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Internal Server Error", code = 500) {
    super(message, code);
  }
}

export class TimeoutException extends ServerException {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Request timeout, please try again.", code = 408) {
    super(message, code);
  }
}

export class RatelimitException extends ServerException {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Too many requests, try again later.", code = 429) {
    super(message, code);
  }
}
