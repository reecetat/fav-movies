const data = loadData()
console.log(data)
const $moviesList = document.getElementById("moviesList")

renderMovies()

function renderMovies() {
    data.movies.forEach(movie => {
        const $movie = document.createElement("div")
        $movie.innerHTML = `<h1>${movie.name}</h1>`
        movie.reviews.forEach(review => {
            $movie.innerHTML += `<li>${review.rating}</li>`
        })
        $moviesList.append($movie)
    })
}

function loadData() {
    //JSON - Javascript Object Notation
    const movies = [

        {
            //key : value
            "title" : "The Lorax",
        "genre" : "Family",
        "reviews" : [
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Reece Tatchell",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 1,
                "like" : false,
                "user" : {
                    "name" : "Ibrahim Ifetiha",
                    "gender" : "male",
                    "region" : "USA"
                }
            }
        ]
    },

    {
        //key : value
        "title" : "21 Jumpstreet",
        "genre" : "Comedy",
        "reviews" : []
    },

    {
        //key : value
        "title" : "The Grinch",
        "genre" : "Children",
        "reviews" : [
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Reece Tatchell",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Nick Watson",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Cody Schafer",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Anthony Hall",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 4,
                "like" : true,
                "user" : {
                    "name" : "Gabriella DelVerne",
                    "gender" : "female",
                    "region" : "USA"
                }
            },
            {
                "rating" : 4,
                "like" : true,
                "user" : {
                    "name" : "Eric Thomas",
                    "gender" : "male",
                    "region" : "USA"
                }
            },

        ]
    },
]

return {
    "movies" : movies
}
}