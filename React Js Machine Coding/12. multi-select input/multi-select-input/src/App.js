import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);
      if(searchTerm.trim() === "") {
        setSuggestions([]);
        return ;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => {
        console.log(err);
      })
    }

    fetchUsers();
  }, [searchTerm])

  const handleKeyDown = (e) => {
    if(
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {

    } 
  }

  return (
    <>
      <div className='user-search-container'>
        <div className='user-search-input'>

          {/* input field with search suggestions */}
          <div>
            <input 
              ref={inputRef}
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search For a User...'
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
