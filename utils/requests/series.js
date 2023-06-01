const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
//TODO: 8
export default {
    async fetchTopRatedSeriesData() {
        const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },

      async fetchTrendingSeriesData() {
        const res = await fetch(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },

      async fetchActionAdventureSeriesData() {
        const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchAnimationeSeriesData() {
        const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=16`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchComedySeriesData() {
        const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchDramaSeriesData() {
        const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=18`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },
      async fetchFamilySeriesData() {
        const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10751`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      },

}