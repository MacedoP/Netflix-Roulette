import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { NetflixRoulettlogo } from "./components/netflix-logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <NetflixRoulettlogo/>
  
  </ChakraProvider>
)
