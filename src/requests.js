// const API_KEY ="ddd4c107aeae39b9942af20eb80181a0";

const request = {
    fetchTrending: '/trending/all/week?api_key=ddd4c107aeae39b9942af20eb80181a0&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=ddd4c107aeae39b9942af20eb80181a0&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=ddd4c107aeae39b9942af20eb80181a0&language=en-US', 
    fetchActionMovies: '/discover/movie?api_key=ddd4c107aeae39b9942af20eb80181a0&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=ddd4c107aeae39b9942af20eb80181a0&with_genres=35', 
    fetchHorrorMovies: '/discover/movie?api_key=ddd4c107aeae39b9942af20eb80181a0&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=ddd4c107aeae39b9942af20eb80181a0&with_genres=107499',
    fetchDocumentaries: '/discover/movie?api_key=ddd4c107aeae39b9942af20eb80181a0&with_genres=99',
}

export default request;