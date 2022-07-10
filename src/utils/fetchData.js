export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'da3479eaa4msh0a8924b3762fb25p15f449jsn86be029a272f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}