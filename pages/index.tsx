import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageContainer from '../components/general/PageContainer'

export default function Home() {
  return (
    <PageContainer className="text-red-600">
      <div>welcome to the boiler plate</div>
    </PageContainer>
  )
}
