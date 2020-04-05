export class HelloWorld {
  public static HELLO_WORLD = 'Hello world!';

  public static printHelloWorld(name: string): string {
    return `${this.HELLO_WORLD} ${name}`;
  }
}
