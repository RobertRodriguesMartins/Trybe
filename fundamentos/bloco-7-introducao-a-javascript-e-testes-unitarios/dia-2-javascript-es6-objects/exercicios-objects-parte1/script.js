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
      },
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


const valorComida = comida => {
  const tamanho = comida.length;
  let valor = 0;
  for (let i = 0; i < tamanho; i += 1) {
    valor += parseFloat((comida[i].amount * comida[i].price).toPrecision(4));
  }
  return valor;
}

const valorBebida = bebido => {
  const tamanho = bebido.length;
  let valor = 0;
  for (let i = 0; i < tamanho; i += 1) {
    valor += parseFloat((bebido[i].amount * bebido[i].price).toPrecision(4));
  }
  return valor;
}

// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  if (typeof order === 'object') {
    const foodKeys = Object.keys(order.order.pizza);
    const drinkValues = Object.values(order.order.drinks);
    const comanda = `${foodKeys.join(', ')} e ${drinkValues[0].type}`;

    const foodValues = Object.values(order.order.pizza);
    const foodValue = valorComida(foodValues);

    const drinkValue = valorBebida(drinkValues);

    const value = foodValue + drinkValue;

    console.log(`olá ${order.name}, o total do seu pedido de ${comanda} é de R$${value} reais.`);

  }
}

orderModifier(order);