import SearchBar from "./components/SearchBar";
import Button from "./components/Button"

function App() {
    return (
        <div className="container">
            <header>
                <div className="d-flex">
                    <SearchBar />
                    <Button />
                </div>
            </header>
        </div>
    )
}