export default function Card(data:any) {
    return(
        <>
        <div>
            {data.backdrop_path}
            {data.release_date}
            {data.title}
        </div>
        </>
    )
}
