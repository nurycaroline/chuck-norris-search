const request = (url, method = 'GET', message) => new Promise((resolve) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      if (JSON.parse(xhr.response).total <= 0) {
        resolve({ message: 'Não foi encontrado nenhum resultados 😔' });
      }
      resolve(JSON.parse(xhr.response));
    }
    resolve({ message });
  };
  xhr.onerror = () => {
    console.log('An error occurred during the transaction');
    resolve({ message });
  };
  xhr.send();
});

export default request;
