import { useState } from "react";

const ANIMAL = ["CAT", "HORSE", "MANGO"];

const SearchParams = () => {
  const [location, setLocation] = useState();
  const [animal, setAnimal] = useState();
  const [breed, setBreed] = useState();
  const breeds = ["Poodle"];

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name=""
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          placeholder="Location"
          value={location}
        />
        <label htmlFor="animal">Animal</label>
        <select
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
          id="animal"
          placeholder="Select Animal"
          value={animal}
        >
          <option />
          {ANIMAL.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select
          onChange={(e) => setBreed(e.target.value)}
          id="breed"
          //   disabled={breed.length === 0}
          placeholder="Select Breed"
          value={breed}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
