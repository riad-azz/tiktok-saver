export class ClientException extends Error {
  /**
   * @param message
   */
  constructor(message = "Something went wrong, please try again.") {
    super(message);
  }
}
