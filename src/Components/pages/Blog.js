import React, { useState, useEffect } from "react";
import "./Blog.css";
import axios from "axios";

const Blog = () => {

  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);
  const [isArticles, setIsArticles] = useState(false);


  const getData = async () => {
    const jokeContainer =document.querySelector('.blogs__main');
    const inputValue = keyword.toLocaleLowerCase();
    const selectSetup = document.querySelectorAll(".blogs_title");
    for(let i = 0; i<selectSetup.length;i++){
      const allData = selectSetup[i].innerText.toLocaleLowerCase()
     if(allData.includes(inputValue)){
      selectSetup[i].style="display: 'flex'";
      jokeContainer.style='display:""'
     }else{
      jokeContainer.style='display:none'
      
     }
    }
  };

  const inputHandle = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then((res) => {
        setArticles(res.data);
        setIsArticles(true);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="blogs" id="blogs">
      <div className="blogs__container">
        <h3> Blogs</h3>
        <div className="blog__button">
          <input
            value={keyword}
            onChange={inputHandle}
            type="text"
            placeholder="Search Blogs Keyword"
          />
          <button onClick={getData}>
            <i className="fas fa-search fa-2x"></i>
          </button>
        </div>
        <div className="blogs__main">
       
          {isArticles
            ? articles.map((value, item) => (
                <div key={value.id} className="blogs__joke__container">
                  <h2 className="blogs__type">{value.type}</h2>
                  <h3 className="blogs_title">{value.setup}</h3>
                  <h2 className="blogs__punchline">{value.punchline}</h2>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Blog;
