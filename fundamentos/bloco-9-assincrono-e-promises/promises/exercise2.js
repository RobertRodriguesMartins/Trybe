const getRandomJoke = async () => {
  const apiURL = "https://icanhazdadjoke.com/";
  const requestInfo = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };
  try {
    const response = await fetch(apiURL, requestInfo);
    const joke = await response.json();
    return joke;
  } catch (err) {
    return err;
  }
};

const showJoke = async () => {
  const h1 = document.querySelector('.randomJoke');
  const resp = await getRandomJoke();

  const { joke } = resp;

  h1.innerText = joke;
}

window.onload = () => {
  showJoke()
}