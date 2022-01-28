const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a5dd604a12ac86e211f8f15c76e8ecc5',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;