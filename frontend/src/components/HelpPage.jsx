import React,{useState,useEffect} from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import Footer from "./Footer";

export default function HelpPage() {
    const [cards, setCards] = useState([]);
    const fetchSearchResults=(input)=>{
        fetch(`http://localhost:3001/cards/${input}`)
          .then(response => response.json())
          .then(data => setCards(data))
          .catch(error => console.error('Error fetching data:', error));
    }
    useEffect(() => {
        
        fetch('http://localhost:3001/cards')
          .then(response => response.json())
          .then(data => setCards(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

  return (
    <div className=" mx-auto">
      <NavBar fetchSearchResults={fetchSearchResults} />
        <SearchBar  fetchSearchResults={fetchSearchResults} />
        <CardContainer cards={cards}/>
        <Footer/>
    </div>
  );
}