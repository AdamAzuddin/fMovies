const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
//TODO: 7
export default {
    async fetchTrending() {
        const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },

      async fetchTopRated() {
        const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },

      async fetchActionMovies() {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchComedyMovies() {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchHorrorMovies() {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchRomanceMovies() {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchDocumentaries() {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchUpcoming() {
        const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&with_genres=99`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },

}