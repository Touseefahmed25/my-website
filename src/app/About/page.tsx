// import Navbar from "../Components/Navbar";

export default function About () {
    return (
      <div>

        {/* <Navbar/> */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">About Us</h1>
        {/* <Link href="/" >Home</Link>
        <br />
        <Link href="/Admission" >Admision</Link>
        <br />
        <Link href="/Contact" >Contact</Link>
        <br />
        <Link href="/Services" >Services</Link>  */}

        <section>
            <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Our Mission</h2>
            <p className="text-center text-large leading-relaxed max-w-xl mx-auto">"Our mission is to provide support to students for quality education and personal development."</p>
        </section>
        <section>
            <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Our Vision</h2>
            <p  className="text-center text-large leading-relaxed max-w-xl mx-auto">"Our vision is to create a world where every student can reach their full potential."</p>
        </section>
        <section>
            <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Meet Our Team</h2>
            <p  className="text-center text-large leading-relaxed max-w-xl mx-auto">"Our team consists of experienced educators and mentors who are ready to guide you."</p>
        </section>
        <section>
            <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Why Choose Us?</h2>
            <ul  className="text-center text-large leading-relaxed max-w-xl mx-auto">
                <li>Personalized Coaching</li>
                <li>Proven Track Record</li>
                <li>Flexible Learning Options</li>
                <li>Supportive Community</li>
            </ul>
        </section>
  
      </div>
    );
  }
  