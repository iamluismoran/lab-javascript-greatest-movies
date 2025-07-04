// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) return 0;

    const spielbergDrama = moviesArray.filter (movie =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
    
    return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    
    const total = moviesArray.reduce((acc, movie) => {
        return acc + (movie.score || 0); 
    },0);

     const avg = total / moviesArray.length;
     return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (!dramaMovies.length) return 0;

    const total = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
    const avg = total / dramaMovies.length;
    return Number (avg.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
 });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const newMovie = { ...movie };
        let duration = 0;
        const parts = newMovie.duration.split(' ');

        parts.forEach(part => {
            if (part.includes('h')) {
                duration += parseInt(part) * 60;
            }
            if (part.includes('min')) {
                duration += parseInt(part);
            }
        });

        newMovie.duration = duration;
        return newMovie;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
