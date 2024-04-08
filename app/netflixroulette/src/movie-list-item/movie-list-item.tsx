import React, { FC } from "react";
import { Movie } from "./models/movie";
import { AspectRatio, Flex, Heading, LinkBox, LinkOverlay,Text } from "@chakra-ui/react";


interface MovieListItemProps{
    movie: Movie;
}
export const MovieListItem: FC<MovieListItemProps> =({movie})=>{
    return(
    <LinkBox>
        <AspectRatio ratio={322 / 455} marginBottom={7}>
            <img src={movie.poster_path} />
        </AspectRatio>

    <Flex justifyContent="space-between" opacity={0.5}>
        <LinkOverlay href={`/movie/${movie.id}`}>
            <Heading
                as="header"
                flexGrow={1}
                gap={2}
                display="flex"
                flexDirection="column"
            >
                <Text as="h4" fontSize="lg" fontWeight="medium">
                    {movie.title}
                </Text>
                {movie.tagLine  ? <Text fontSize="sm">{ movie.tagLine}</Text>:  null}

            </Heading>

        </LinkOverlay>

        <Text sx={{
            border: "solid 1px",
            borderColor: "boder.default",
            borderRadius: "8px",
            fontSize: "sm",
            height:  "8px",
            padding: "8px 4px"
        }}>
            {movie.release_date.getFullYear()}
        </Text>
    </Flex>
    </LinkBox>
    )
}