"use client"
import Image from 'next/image'
import { Fetcher } from '@/lib/fetcher'
import { useState } from 'react'

export default function Home() {
    const [result, setResult] = useState([])

    const url: any = "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc&api_key=eac4c291261c9bb94e659091a189cb38"
    Fetcher(url)
        .then((res) => {
            setResult(res.result)
        })

    return (
        <>
            <div className='w-full h-screen bg-black'>
                <div className='w-full px-8 py-4 bg-gray-500'>
                    <img src='https://playmo.mn/img/logo_white.svg' className='w-32'></img>
                </div>
                <img src='https://api.playmo.mn/storage/images/media/banner/fa2XZtqZmgovgw9ppaLD7A17FUvvJFCNRzf5r5LK.jpg'></img>
            </div>
        </>
    )
}
