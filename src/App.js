import React,{Fragment, useState} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import jobsdata from "./jobsdata";
import Filter from "./components/Filter";
import './App.css';


const App = () => {
  const [searchTerms, setSearchTerms] = useState([]);
  const [showFilter, enableFilter] = useState(false);

  const onClick = (e) => {
    const {textContent} = e.target;
    if (!searchTerms.includes(textContent)){
      setSearchTerms([...searchTerms, textContent])
      enableFilter(true);
    }

  };

  const clear = (e) => {
    const {className, textContent, previousElementSibling} = e.target;
    if (className === "clear"){
      setSearchTerms("");
      
    }else if (className === "term"){
      setSearchTerms(searchTerms.filter(term => term !== textContent));
    }else{
      setSearchTerms(searchTerms.filter(term => term !== previousElementSibling.textContent));
    }
    console.log(searchTerms.length);
    if (searchTerms.length <= 1){
      enableFilter(false);
    }

  } 

  const checkCriteria = (data) =>{
    return searchTerms.every(term => { 
        return data.skills.includes(term);
    })
  }


  const createPost = (post) => (
    <Posts
        key={post.id}
        onClick = {onClick}
        companyName= {post.companyName}
        jobTitle = {post.jobTitle}
        companyLogo= {post.companyLogo}
        skills = {post.skills}
        new = {post.new}
        featured = {post.featured}
        dayOfPost = {post.dayOfPost}
        contract = {post.contract}
        region = {post.region}
    />
  );
  
  return(
  <Fragment>
    <Header />
    <Filter terms={searchTerms} onClick={clear} visible={showFilter}/>
      {
        searchTerms.length > 0? jobsdata.filter(checkCriteria).map(createPost) : jobsdata.map(createPost)
      }

    <Footer />
  </Fragment>

)};

export default App;
