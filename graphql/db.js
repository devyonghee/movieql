import fetch from 'node-fetch';

export const people = [
    {
        id: "0",
        name: 'yonghee',
        age: 28,
        gender: 'male'
    },
    {
        id: "1",
        name: '1',
        age: 28,
        gender: 'male'
    },
    {
        id: "2",
        name: '2',
        age: 28,
        gender: 'male'
    },
    {
        id: "3",
        name: '3',
        age: 28,
        gender: 'male'
    },
    {
        id: "4",
        name: '4',
        age: 28,
        gender: 'male'
    },
    {
        id: "5",
        name: '5',
        age: 28,
        gender: 'male'
    },
];

let movies = [
    {
        id: 0,
        name: "star wars",
        score: 3
    },
    {
        id: 1,
        name: "avengers",
        score: 8
    }, {
        id: 2,
        name: "godfather",
        score: 99
    }, {
        id: 3,
        name: "Logan",
        score: 2
    },
];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredPeople = people.filter(person => String(id) === person.id);
//     return filteredPeople[0];
// };

export const getById = id => {
    const filteredMovie = movies.filter(movie => String(id) === movie.id);
    return filteredMovie[0];
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => String(movie.id) !== String(id));
    if (movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
};
export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name, score
    };
    movies.push(newMovie);
    return newMovie;
};

const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(`${REQUEST_URL}`)
        .then(res => res.json())
        .then(json => json.data.movies)
};