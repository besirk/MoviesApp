import { useState ,useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
 import SearchIcon from './search.svg'

const api_url = 'https://www.omdbapi.com?apikey=87fb32fe';


const App = () =>{
        const [movies, setMovies] = useState([]);
        const [searchTerm,setSearchTerm] = useState('');


        const searchMovies = async(title) =>{
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();

       
            setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="app">
            <h1>NetFlik</h1>

            <div className="search">
                <input type="text"
                placeholder='Search for Movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <img
                 src={SearchIcon} 
                 alt="Search"
                 onClick={() => searchMovies(searchTerm) } />
            </div>

            {movies?.length > 0 ? 
                (<div className="container">
                   {movies.map((movie) => (
                        <MovieCard movie={movie} />
                   ))}
                 </div> )
            : 
            (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>
            )
            
            }

           
        </div>
    );
}

export default App;