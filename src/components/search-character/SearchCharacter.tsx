import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

// Type definitions for GraphQL query
interface Character {
  id: string;
  name: string;
  image: string;
  episode: { id: string }[];
}

interface CharactersData {
  characters: {
    results: Character[];
  };
}

const GET_CHARACTERS = gql`
  query GetCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        episode {
          id
        }
      }
    }
  }
`;

const SearchCharacter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<Character[]>([]);

  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS, {
    variables: { name: searchTerm },
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    // Filter options
    const filtered = data?.characters.results.filter((character) =>
      character.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredOptions(filtered || []);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  // Function to highlight matching characters in the name
  const highlightMatch = (name: string) => {
    const index = name.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index !== -1 && searchTerm.trim() !== '') {
      return (
        <>
          {name.substring(0, index)}
          <span className='highlight'>{name.substring(index, index + searchTerm.length)}</span>
          {name.substring(index + searchTerm.length)}
        </>
      );
    }
    return name;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className='search-section'>
      <div className='selected-options'>
        <p>Selected Characters:</p>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      <div className='search-box'>
        <input type='text' value={searchTerm} onChange={handleSearchChange} placeholder='Search...' />
      </div>
      <div className='character-container'>
        {filteredOptions.map((character) => (
          <div key={character.id} className='character-item'>
            <input
              type='checkbox'
              checked={selectedOptions.includes(character.name)}
              onChange={() => handleOptionClick(character.name)}
            />
            <div className='character'>
              <img src={character.image} alt={character.name} />
              <div className='character-info'>
                <p>{highlightMatch(character.name)}</p>
                <p className='episode'>{character.episode.length} Episodes</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCharacter;
