const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (temp) => 
  console.log(`Mars temperature is:${temp} degree Celsius`); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

setTimeout(sendMarsTemperature, messageDelay(), getMarsTemperature());