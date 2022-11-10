import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Prueba de ruta dinamica para productos</p>
      <Link href="/product/camisa1" >Camisa1</Link>
      <br />
      <Link href="/product/pantalon1" >Pantalon1</Link>
      <br />
      <Link href="/product/pantalon2" >Pantalon2</Link>
    </main>
  )
}
