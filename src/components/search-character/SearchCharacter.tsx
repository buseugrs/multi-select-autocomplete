import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Autocomplete, Checkbox, TextField, Typography, CircularProgress } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

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
  const [selectedOptions, setSelectedOptions] = useState<Character[]>([]);

  const { loading, data } = useQuery<CharactersData>(GET_CHARACTERS, {
    variables: { name: searchTerm },
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, character: Character) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, character]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option.id !== character.id));
    }
  };

  return (
    <div className='search-section'>
      <Typography variant='h6'>Multi Select Autocomplete</Typography>
      <Autocomplete
        multiple
        className='search-box'
        options={data?.characters.results || []}
        disableCloseOnSelect
        getOptionLabel={(option: Character) => option.name}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder=' Select Character...'
            InputProps={{
              ...params.InputProps,
              style: { borderRadius: '20px' }, // Border radius tanımı
              endAdornment: (
                <>
                  {loading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.name, inputValue, { insideWords: true });
          const parts = parse(option.name, matches);

          return (
            <div className='character-item'>
              <li {...props}>
                <Checkbox
                  checked={selectedOptions.some((item) => item.id === option.id)}
                  onChange={(e) => handleCheckboxChange(e, option)}
                />
                <div className='character'>
                  <img className='character-img' src={option.image} alt={option.name} />
                  <div className='character-info'>
                    {parts.map((part, index) => (
                      <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                        {part.text}
                      </span>
                    ))}
                    <Typography className='episode' variant='body2'>
                      {option.episode.length} Episodes
                    </Typography>
                  </div>
                </div>
              </li>
            </div>
          );
        }}
      />
    </div>
  );
};

export default SearchCharacter;
