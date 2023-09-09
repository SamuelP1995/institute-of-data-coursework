

function MoviesList() {
    const movies = [
        {
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];
    return (
        <div className="MoviesList componentBox">
            <h2>3 Movies that are pretty good</h2>
            <ul> 
                { movies.map((movie, i) => (
                    <li key={i}>
                        {movie.title} <br></br>
                        {movie.synopsis} <br></br>
                        {movie.year} 
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default MoviesList;



