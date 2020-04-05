import { HelloWorld } from '../katas/HelloWorld';

test('Test Hello world', () => {

  expect(HelloWorld.printHelloWorld('jest')).toBe('Hello world! jest');
});