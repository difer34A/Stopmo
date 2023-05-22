"use client"
export default function Card(props: any) {
    return (
        <>
            <div className="text-white">
                <img src={`https://image.tmdb.org/t/p/original/${props.id}`} alt={props.title} />
                {props.title}
            </div>
        </>
    )
}
