import { AuthProvider } from "./context/authContext"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"


export const App = () => {

  return (
    <>
    <GlobalStyle/>
    <AuthProvider>
    <RoutesMain/>
    </AuthProvider>
    </>
  )
}


