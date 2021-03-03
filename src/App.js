import "./App.scss";
import OfflineBanner from "./component/offlineBanner/offlineBanner";
import CookieDisclaimerBox from "./component/cookieDisclaimerBox/cookieDisclaimerBox";
import SearchBar from "./component/bigComponent/searchBar/searchBar";
import ExampleBar from "./component/bigComponent/examplesBar/exampleBar";
import AdBar from "./component/bigComponent/adBar/adBar";
import FooterSpace from "./component/bigComponent/footerSpace/FooterSpace";

function App() {
  return (
    <div className="App">
      <OfflineBanner />

      <div className="contentApp">
        <div className="contentAppWrapper">
          <div className="anothercontentAppWrapper">
            <div className="anothercontentAppWrapper2">
              <SearchBar />
              <ExampleBar />
              <AdBar />
              <FooterSpace />
            </div>
          </div>
        </div>
      </div>

      <CookieDisclaimerBox />
    </div>
  );
}

export default App;
