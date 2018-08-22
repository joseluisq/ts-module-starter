import { Greeter, Languages } from '../src'

const es = new Greeter(Languages.ES)
const esGreeting = es.greet('Jose!')

if (esGreeting !== 'Hola Jose!') {
  throw new Error(`Spanish greeting '${esGreeting}' is not correct!`)
}
