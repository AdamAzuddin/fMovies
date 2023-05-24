interface Props{
  params: {movieId: string}
}
const Details = ({params}:Props) => {
  const id=params.movieId
  return (
    <div>{id}</div>
  )
}

export default Details