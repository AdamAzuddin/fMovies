export default {
    async fetchTopRatedSeriesData() {
        const res = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=a3d7823f0e528024e8491783ee19478b&language=en-US');
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