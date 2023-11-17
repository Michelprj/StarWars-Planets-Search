async function fetchApi() {
  try {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error.message;
  }
}

export default fetchApi;
