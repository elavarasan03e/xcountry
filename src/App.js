import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="country-container">
        {country.map((data) => {
          return (
            <div key={data.cca3} className="country-card">
              <img src={data.flags.png} alt={`Flag of ${data.name.common}`} />
              <h2>{data.name.common}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
