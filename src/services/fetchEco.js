const fetchNovo = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const payload = await response.json();
  return payload;
};

export default fetchNovo;
