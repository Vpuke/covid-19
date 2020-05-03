import React from "react";
import "./App.css";
import CoronaSearch from "./components/CoronaSearch/CoronaSearch";
import CoronaCard from "./components/CoronaCard/CoronaCard";
import CoronaTitle from "./components/CoronaTitle/CoronaTitle";
import Information from "./components/Information/Information";
import _ from "lodash";

function App() {
  const [searchResult, setSearchResult] = React.useState("");
  const [inputText, setInputText] = React.useState("");
  const [totalDeaths, setTotalDeaths] = React.useState("");
  const [totalConfirmed, setTotalConfirmed] = React.useState("");
  const delayedQuery = React.useRef(_.debounce((q) => setInputText(q), 500))
    .current;

  React.useEffect(() => {
    // const url = `https://api.covid19api.com/live/country/${inputText}/status/confirmed`;
    const url = `https://api.covid19api.com/summary`;

    if (!inputText) {
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const country = data.Countries.find(
          ({ Country }) => Country === inputText
        );
        setSearchResult(country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inputText]);

  React.useEffect(() => {
    const url = `https://api.covid19api.com/summary`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTotalDeaths(data.Global.TotalDeaths);
        setTotalConfirmed(data.Global.TotalConfirmed);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onChange = (e) => {
    delayedQuery(e.target.value);
  };

  return (
    <div className="App">
      <CoronaTitle>Covid-19</CoronaTitle>
      <CoronaSearch handleChange={onChange} />
      {searchResult && (
        <CoronaCard
          key={searchResult}
          Country={searchResult.Country}
          Deaths={searchResult.TotalDeaths}
          ConfirmedCases={searchResult.TotalConfirmed}
          RecoveredCases={searchResult.TotalRecovered}
        />
      )}
      <Information TotalDeaths={totalDeaths} TotalConfirmed={totalConfirmed} />
    </div>
  );
}

export default App;
