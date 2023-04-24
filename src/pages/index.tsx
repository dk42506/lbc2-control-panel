import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href='/homepage'><button>Log In</button></Link>
    </>
  )
}
