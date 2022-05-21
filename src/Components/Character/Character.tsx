import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import "./Character.css"


const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
    character(id: $id) {
        name
        image
        episode {
            name
            episode
        }
    }
}
`

interface Episode {
    name: string;
    episode: string;
}

const Character: React.FC = () => {
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div className="character-container">
            <img src={data.character.image} alt={data.character.name} />
            <h2>{data.character.name}</h2>
            {data.character.episode.map((element: Episode) => (
                <div>
                    <h4>{element.name}</h4>
                    <h4>{element.episode}</h4>
                </div>
            )
            )}
        </div>
    )
}

export default Character