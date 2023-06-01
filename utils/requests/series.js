const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export default {
    async fetchTopRatedSeriesData() {
        const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`);
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
       
        // Recommendation: handle errors
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data');
        }
       
        return res.json();
      }
}