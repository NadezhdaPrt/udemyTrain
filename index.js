
const personalMovieDB = {    
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),   
                b = prompt('На сколько оцените его?', '');
                if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
                personalMovieDB.movies[a] = b;               
        }
            else {
                console.log('Error');
                i--;
            }
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {      
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '').trim().toLowerCase();
                while (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '') {
                    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
                }
        }
        personalMovieDB.genres.forEach( (gen, index) => {
            console.log(`Любимый жанр №${index + 1} - это ${gen}`);
        })
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) 
            console.log('Просмотрено довольно мало фильмов');
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
            console.log('Вы классический зритель');
        else if (personalMovieDB.count >= 30)
            console.log('Вы киноман!')
        else console.log('Ошибка') 
    },
    showMyDB: function (hidden) {
        if (!hidden) 
            console.log(personalMovieDB);
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms(); 
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();


