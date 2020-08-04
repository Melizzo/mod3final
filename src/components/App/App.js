import React, { useState, useEffect } from "react";
import "./App.css";
import { getUrls, postUrl } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

const App = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const urlsfound = await getUrls()
      setUrls(urlsfound.urls) 
    }
    fetchData()
  }, [])

  const saveUrl = async (title, url) => {
    const obj = {
      long_url: `${url}`,
      title: `${title}`
    }
    const formSubmit = await postUrl(obj)

  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm saveUrl={saveUrl}/>
      </header>

      <UrlContainer urls={urls} />
    </main>
  );
};

export default App;
