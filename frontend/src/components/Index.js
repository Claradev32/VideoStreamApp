import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import VideoList from "./Video/VideoList";
import Video from "./Video/Video";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



export default function Index(props) {
    const { isLoggedIn, setIsLoggedIn } = props
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/video" element={<VideoList setLoggedIn={setIsLoggedIn}/>}>
                        </Route>
                        <Route path="/video/:id" element={<Video setLoggedIn={setIsLoggedIn}/>}>
                        </Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}>
                        </Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />}>
                        </Route>
                    </Routes>
                }
            </BrowserRouter>
        </div>
    )
}
