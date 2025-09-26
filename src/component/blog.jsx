import React from "react";
import "./css/blog.css";

function Blog() {
  const blogs = [
    {
      title: "DELL",
      description: "Dell is known for being premium,thin and light,with a focus on performance and AI features.",
      img: "/images/dell.png",
    },
    {
      title: "ACER",
      description: "Acer is versatile and user friendly,performance and affordability,suitable for wide range of tasks. ",
      img: "/images/acer.png",
    },
    {
      title: "APPLE",
      description: "Apple is focusig on their seemless integration with other Apple devices,userfriendly macOS operating system.",
      img: "/images/apple.png",
    },
    {
      title: "LENOVO",
      description: "Lenova is leveraging AI in its laptops,with features like AI engine + and AI PCs.",
      img: "/images/lenovo.png",
    },
  ];

  return (
    <section className="blogs">
      <h2>LATEST MODELS</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div key={index} className="card">
            <img src={blog.img} alt={blog.title} className="card-img" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;