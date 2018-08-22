interface IGreetingMaker {
  lang: number
  greet (name: string): string
}

export enum Languages {
  EN,
  ES,
  DE
}

abstract class GreetingMaker implements IGreetingMaker {
  private greetings: string[] = [
    'Hi',
    'Hola',
    'Hallo'
  ]

  constructor (readonly lang: Languages = Languages.EN) {}

  greet (name: string) {
    return this.greetings[this.lang] + ' ' + name
  }
}

export class Greeter extends GreetingMaker {
}
