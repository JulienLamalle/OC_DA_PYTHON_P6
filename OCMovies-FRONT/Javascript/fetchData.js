const API_URL = "http://localhost:8000/api/v1/titles"

export const getData = async (query) => {
  try {
    const response = await fetch(`${API_URL}${query}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    console.log(data);
    return data;
  } catch (error) {
    const errorMessage = error.error ? error.error : "An error has occured";
    console.error(errorMessage);
  }
}