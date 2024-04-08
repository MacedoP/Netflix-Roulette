import { Heading, Link,Text } from "@chakra-ui/react";
import React, { FC } from "react";



export const NetflixRoulettlogo: FC=()=>{
    return(
        <Link 
        href="/"
        _hover={{
            textDecoration: "none"
        }}
        >
            <Heading fontSize="xl" color="text.heighted">
              <Text as="span" fontWeight="black">netflix</Text>
              <Text as="span" fontWeight="medium">roulette</Text>
            </Heading>

        </Link>
    )
}