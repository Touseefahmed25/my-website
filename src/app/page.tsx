// import Navbar from "./Components/Navbar";

export default function Home () {
  return (
    <div className="text-center w-[100%]">

      {/* <Navbar/> */}
     {/* <Link href="/About" >About</Link>
      <br />
      <Link href="/Admssions">Admssions</Link>
      <br />
      <Link href="/Contact">Contact</Link>
      <br />
      <Link href="/Services">Services</Link>    */}

      <section>
     <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to Our Coaching Academy</h1>
          <p>Empowering students to achieve their dreams.</p>
        
        </section>

          <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Courses</h2>
          
            <div className="course">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Maths</h4>
              <p>Learn from the best instructors.</p>
            </div>
            <div className="course">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Science</h4>
              <p>Interactive learning experience.</p>
            </div>
            <div className="course">
              <h4 className="text-xl font-bold text-blue-900 mb-3">English</h4>
              <p>Enhance your language skills.</p>
              <section/>
              </div>
   </div>

  );
}
