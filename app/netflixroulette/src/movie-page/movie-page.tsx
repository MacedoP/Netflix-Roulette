import React, { useEffect, useState } from "react";
import { Movie } from "../movie-list-item/models/movie";
import { Box } from "@chakra-ui/react";
import { MovieList } from "../movie-list/movie-list";
import { release } from "os";


export const MoviePage =()=>{

        const [movies, setMovie]= useState<Movie[]>([]);
        useEffect(()=>{

        const getMovie = async ()=>{

            const response =await fetch("http://localhost:3000/movies");
            const movieJson = await response.json();
            setMovie(movieJson.data.map((movie: any)=>({
                ...movie,
                release_date: new Date(movie.release_data)
            })))
        }
        
        getMovie();
    },[])

         return(
            <Box width="full" backgroundColor="background.dark">
            {movies.length > 0 ? <MovieList movies={movies}/>: null}
            </Box>
    )
}