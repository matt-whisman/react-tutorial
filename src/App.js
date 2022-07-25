import { useState } from 'react'
import PostList from './components/PostList'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Contact from './views/Contact'
import Home from './views/Home'
import Blog from './views/Blog'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/" element={<Home />}  />
                </Routes>
            </Router>
        </>
    )
}
