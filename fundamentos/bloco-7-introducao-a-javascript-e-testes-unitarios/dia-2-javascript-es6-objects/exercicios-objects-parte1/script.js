const assert = require('assert');

const order = {
  name: 'Robert',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701" 
const customerInfo = (order) => {
  if (typeof order === 'object') {
    const objeto = Object.assign(order);
    const chaveOrder = objeto.order;
    return `Olá ${chaveOrder.delivery['deliveryPerson']}, entrega para: ${objeto.name}, Telefone: ${objeto.phoneNumber}, R. ${objeto.address['street']}, Nº: ${objeto.address['number']}, AP: ${objeto.address['apartment']}`;
  }
  throw new Error('parâmetro recebido por customerInfo não é objeto');
}


//verifica se customerInfo é do tipo função
assert.strictEqual(typeof customerInfo, 'function', 'não é uma função');

// verifica se função retorna uma string
assert.strictEqual(typeof customerInfo(order), 'string', 'não retorna uma string');

//verifica se ao passar um argumento string ou number para customerInfo ele retorna erro
assert.throws(() => {
  customerInfo('teste');
  customerInfo(1);
}, 'função aceitando string e/ou number')




console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);