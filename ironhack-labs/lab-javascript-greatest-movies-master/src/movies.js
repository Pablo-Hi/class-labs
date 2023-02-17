// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directorsListUnfiltered = movies.map((movie) => movie.director);
  
    //  return directorsListUnfiltered;
  
    // Bono - queremos es limpiar el array de los nombres de directores duplicados

    const directorsListFiltered = directorsListUnfiltered.filter(
      (director, index, paramThree, paramFour) => {
        return directorsListUnfiltered.indexOf(director) === index;
      }
    );
    return directorsListFiltered;
  }
  console.log(getAllDirectors(movies));


 // ---------------------------------------------------------------------------------------------

 
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  //function howManyMovies(movies) { }
  const howManyMovies = (movies) => {
    // part 1

    const stevenDramaFilteredMovies = movies.filter((movie) => {
      return (
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
      );
    });
    // return stevenDramaFilteredMovies
  
    // part 2
    // le agregamos la prop length porque nos pide que busquemos por la longitud del array nuevo que nos hemos creado
  
    return stevenDramaFilteredMovies.length;
  };
  console.table(howManyMovies(movies));


 // ---------------------------------------------------------------------------------------------


  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  const scoresAverage = (movies) => {

    // part 1

    if (movies.length === 0) return 0;

    // part 2
 
    // const totalScoreSkeleton = movies.reduce((accumulator, currentValue) => {}, 0);
    const totalScore = movies.reduce((accumulator, currentValue) => {
      if (currentValue.score) {
        return accumulator + currentValue.score;
      } else {
        return accumulator;
      }
    }, 0);
  
    // Part 3 - variable - save logic - math logic + toFixed(2) - para pasar 2 pocisiones decimales
    const averageScoreString = (totalScore / movies.length).toFixed(2);
  
    return Number(averageScoreString);
  };
  console.log(scoresAverage(movies));


   // ---------------------------------------------------------------------------------------------

  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  const dramaMoviesScore = (movies) => {
    // part 0 -

    if (movies.length === 0) return 0;
  
    // part 2

    const dramaMoviesUsingIncludes = movies.filter((movie) =>
      movie.genre.includes("Drama")
    );
  
    // part 3

    const averageDramaScores = scoresAverage(dramaMoviesUsingIncludes);
  
    // part 4 - finaliza with style :)
    return averageDramaScores;
  };

  console.log(dramaMoviesScore(movies));
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  const orderByYear = (movies) => {
    // part 1

    const movieArrayCopy = movies.map((movie) => {
      return movie;
    });

    // part 2

    movieArrayCopy.sort((movieA, movieB) => {
      if (movieA.year > movieB.year) return movieA.year - movieB.year;
      if (movieA.year < movieB.year) return movieA.year - movieB.year;
      else return movieA.title.localeCompare(movieB.title);
    });
    // part 3

    return movieArrayCopy;
  };

  console.table(orderByYear(movies));

  
   // ---------------------------------------------------------------------------------------------


  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  const orderAlphabetically = (movies) => {
    return movies
      .map((movie) => movie.title) 
      .sort() 
      .slice(0, 20);
  };
  
  console.table(orderAlphabetically(movies));
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  //Part 001
  const convertHours = (hourString) => {
    let calculateHour = hourString.split("h");
    return calculateHour[0] * 60;
  };
  // Part 002
  const convertMinutes = (minuteString) => {
    let calculateMinutes = minuteString.split("min");
    return Number(calculateMinutes[0]);
  };
  // Part 003
  const convertDuration = (duration) => {
    let timePieces = duration.split(" ");
  
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);
  
    return minutes;
  };
  // Part 004
  const turnHoursToMinutes = (movies) => {
    let newCentArray = movies.map((movie) => {
      let newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = convertDuration(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.rate = movie.rate;
  
      return newMovie;
    });
  
    return newCentArray;
  };
  console.log("Iteration 07");
  console.table(turnHoursToMinutes(movies));
  console.log("-----------------------------");
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  const bestYearAvg = (movies) => {
    if (!movies.length) return null;
  
    let masterObject = {};
  
    movies.forEach((movie) => {
      if (!masterObject[movie.year]) {
        masterObject[movie.year] = [movie];
      } else {
        masterObject[movie.year].push(movie);
      }
    });
  
    let highest = 0;
    let theActualYear;
    for (let theYear in masterObject) {
      if (scoresAverage(masterObject[theYear]) > highest) {
        highest = scoresAverage(masterObject[theYear]);
        theActualYear = theYear;
      }
    }
    return `The best year was ${theActualYear} with an average score of ${highest}`;
  };
  console.log("Iteration 08");
  console.log(bestYearAvg(movies));
  console.log("-----------------------------");
  