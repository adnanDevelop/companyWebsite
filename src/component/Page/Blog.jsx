import React from 'react'
import BlogHero from '../element/BlogSection/BlogHero'
import BlogCard from '../element/BlogSection/BlogCard'

const Blog = () => {
  document.title='GoMarkho-Blog Page'


  const blogtitle = {
    title : 'News & Articles',
    content : 'Stay tuned for more updates!',
  }

  return (
    <div>
      <BlogHero title={blogtitle.title} content={blogtitle.content}  />
      <BlogCard/>
    </div>
  )
}

export default Blog