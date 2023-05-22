"use client"
import Card from '@/components/card'
import Image from 'next/image'
import { Fetcher } from '@/lib/fetcher'
import { useEffect, useState } from 'react'

export default function Home() {
    let result: any[] = [];
    const [data, setData] = useState([])


    const url: any = "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc&api_key=eac4c291261c9bb94e659091a189cb38"
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res.results))
    }, [])


    return (
        <>
            <div className='w-full h-screen bg-black'>
                <div className='w-full px-8 py-4 bg-[#2B2B2B]'>
                    <img src='https://playmo.mn/img/logo_white.svg' className='w-32'></img>
                </div>
                <img src='https://api.playmo.mn/storage/images/media/banner/fa2XZtqZmgovgw9ppaLD7A17FUvvJFCNRzf5r5LK.jpg'></img>
                <div className='text-3xl font-bold p-2'>
                    Үзэлт ихтэй
                    <div className='flex gap-2'>
                        {
                            data.map((item, index) => (
                                <div className='w-80'>
                                    <img className='w-full' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
