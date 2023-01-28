const key = '5ae36eec9672fd688b342fe9ad6f4b36'
const requests = {
    requestPopular:  `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:  `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestRecommended: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1`
}

export default requests;

/*In this js file all the request form the API are stored and exported further
* */