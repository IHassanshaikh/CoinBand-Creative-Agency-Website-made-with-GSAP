import React from 'react'
import "../styles/blog.css"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.jpg"

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">New in the Blog</h2>
      <div className="blog-cards">
        <div className="blog-card">
          <img src={blog1} alt="Top 11 Crypto Presales" />
          <h3>Top 11 Crypto Presales (ICO) in 2025</h3>
          <button className="read-btn">Read</button>
        </div>

        <div className="blog-card">
          <img src={blog2} alt="Casino Marketing" />
          <h3>Casino Marketing Strategies That Work: Ideas, Plans, Campaigns</h3>
          <button className="read-btn">Read</button>
        </div>

        <div className="blog-card">
          <img src={blog3} alt="Launch ICO 2025" />
          <h3>How to Launch an ICO in 2025: Step-by-Step Guide</h3>
          <button className="read-btn">Read</button>
        </div>
      </div>
      <button className='QA-showmore'>Show more</button>

    </section>

  )
}

export default Blog
