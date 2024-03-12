export default function Anime({anime, i}){
    return (
        <tr key={i}>
        <td> {anime.name}</td>
        <td> {anime.description}</td>
      </tr>
    )
}