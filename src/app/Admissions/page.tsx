import { setTimeout } from "timers";

// import Navbar from "../Components/Navbar";
export default async function Admissions () {
  await new Promise ((resolve)=>{
    setTimeout (resolve,5000);
  });

    return (
      <div>
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Admissions Info</h1>
        <p className="text-center text-large leading-relaxed max-w-xl mx-auto">Admissions will be announce soon.</p>

        {/* <Navbar/> */}
        {/* <Link href="/" >Home</Link>
        <br />
        <Link href="/About" >About</Link>
        <br />
        <Link href="/Contact" >Contact</Link>
        <br />
        <Link href="/Services" >Services</Link> */}

      
      </div>
    );
}
  