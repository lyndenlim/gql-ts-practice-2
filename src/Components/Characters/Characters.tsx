import { gql, useQuery } from "@apollo/client"
import "./Characters.css"
import { Link } from "react-router-dom"

const GET_CHARACTERS = gql`
{
  characters {
    results {
        id
      image
      name
    }
  }
}
`

interface Character {
    id: string;
    image: string;
    name: string;
}

const Characters: React.FC = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div className="characters-container">
            {data.characters.results.map((character: Character) => (
                <Link to={`/${character.id}`}>
                    <div key={character.name}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Characters