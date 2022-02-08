import SignIn from "./Auth/SignIn"
import SignUp from "./Auth/SignUp"
import Header from "./Navbar/Header"
import VideoList from "./Video/VideoList"
import Video from "./Video/Video"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"


export default function Index(props) {
    const {isLoggedIn, setIsLoggedIn} = props
    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/" element={<VideoList setIsLoggedIn={setIsLoggedIn}/>}/>
                        <Route path="/video/:id" element={<Video setIsLoggedIn={setIsLoggedIn}/>}/>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/"
                               element={<SignIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}/>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </div>
    )
}
