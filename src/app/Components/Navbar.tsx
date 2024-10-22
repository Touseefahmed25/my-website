import Link from 'next/link'

export default function Navbar(){
    return(
        <div className='flex-1 text center mb-10 w-[100%] sm:flex bg-yellow-300 h-20 sm:w-[100%] text-blue flex items-center justify-between '>
          <h1 className='text-xl py-2 sm:text-2xl font-bold ml-2 sm:ml-20'>Jhons Collegiate</h1>
          <div className='flex justify-around sm:flex font-bold mr-4 sm:mr-20 gap-2 sm:gap-6'></div>  
      <Link href="/" >Home</Link>
      <br />
      <Link href="/About" >About</Link>
      <br />
      <Link href="/Admissions">Admissions</Link>
      <br />
      <Link href="/Contact">Contact</Link>
      <br />
      <Link href="/Services">Services</Link>
      </div>

    );
}
