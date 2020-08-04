import React, { Component } from "react";
import "./App.css";
import { getUrls } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

const App = () => {
  const [urls, setUrls] = useState("");

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={this.state.urls} />
    </main>
  );
};

export default App;
