import Card from '@/components/card'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className='w-full h-screen bg-black'>
                <div className='w-full px-8 py-4 bg-[#2B2B2B]'>
                    <img src='https://playmo.mn/img/logo_white.svg' className='w-32'></img>
                </div>
                <img src='https://api.playmo.mn/storage/images/media/banner/fa2XZtqZmgovgw9ppaLD7A17FUvvJFCNRzf5r5LK.jpg'></img>
                <div className='text-3xl font-bold p-2'>
                Үзэлт ихтэй
                <Card/>
                </div>
            </div>
        </>
    )
}
