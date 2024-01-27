import Card from './components/Card'
import { useState } from 'react'
import './app.css'
import { Data } from './components/assets/data'
import Header from './components/assets/Header'
import AddBlog from './components/AddBlog'
import './components/responsiveness.css'


function App() {
  const [blogs, setBlogs] = useState(Data);
  const handleAddBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  const [search, setSearch] = useState('');
  const startSearch = (e) => {
    setSearch(e.target.value)
  }
  const filteredBlog = blogs.filter((blog) => {
    return search.toLowerCase() === '' || blog.category.toLowerCase().includes(search);
  })
  return (
    <>
      <Header onToggle={toggleVisibility} visible={isVisible} search={startSearch} />
      {isVisible && <AddBlog onAddBlog={handleAddBlog} />}
      <div className='card-container'>
        {filteredBlog.map((blog) => (
          <Card image="src\components\assets\1.jpg" category={blog.category} heading={blog.heading} description={blog.description} author={blog.author} />
        ))}
      </div>
      <div className="searchFailed">
        {filteredBlog.length === 0 && <img className='searchErrorImage' src='src\components\assets\searchfailed.avif'/>}
      </div>
    </>
  )
}

export default App
