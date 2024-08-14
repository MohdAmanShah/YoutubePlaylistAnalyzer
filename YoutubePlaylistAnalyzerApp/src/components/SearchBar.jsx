import { useState } from "react";
import Button from "./Button";

function SearchBar() {
    const [link, setLink] = useState('');
    return (
        <div class="mb-3">
            <input className="form-control" type="text" value={link} onChange={(e) => { setLink(e.target.value) }} placeholder="Paste playlist link." aria-label="input for playlist link" />
            <Button />
        </div>
    )
}

export default SearchBar;