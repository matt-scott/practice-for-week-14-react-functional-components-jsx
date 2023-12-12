import pokeImage from "./images/bulbasaur.jpg";
import "./showcase.css";

function Showcase() {
  let favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "Mega Drain",
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img className="profile-image" src={pokeImage} alt={favPokemon}></img>
      <h2>
        <span style={{ color: "white", backgroundColor: "green" }}>
          {favPokemon}'s
        </span>{" "}
        type is{" "}
        <span style={{ color: "#008000", backgroundColor: "#ffffff" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is {pokeCharacteristics.move}
      </h2>
    </div>
  );
}

export default Showcase;
