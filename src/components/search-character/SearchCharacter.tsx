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
    variables: { name: searchTerm }
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    // Filter options
    const filtered = data?.characters.results.filter(
      character => character.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredOptions(filtered || []);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter(item => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
      <ul>
        {filteredOptions.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <span>{character.name}</span>
            <span>{character.episode.length} episodes</span>
            <input
              type="checkbox"
              checked={selectedOptions.includes(character.name)}
              onChange={() => handleOptionClick(character.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchCharacter;
