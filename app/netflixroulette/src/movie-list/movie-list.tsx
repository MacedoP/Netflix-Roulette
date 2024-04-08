import React, { FC } from "react";
import { Movie } from "../movie-list-item/models/movie";
import { Grid, GridItem } from "@chakra-ui/react";
import { MovieListItem } from "../movie-list-item/movie-list-item";



interface MovieListProps{
    movies: Movie[];

}

export const MovieList: FC<MovieListProps> = ({movies}) =>{
    
    return <Grid sx={{
        gridTemplateColumns: "repeat(3, 1fr",
        gap: 12
    }}>
        {movies.map((movieItem: Movie)=>{
            return( 
            <GridItem key={movieItem.id}>
            <MovieListItem movie={movieItem}/>
            </GridItem>
            )
        })}

    </Grid>

}