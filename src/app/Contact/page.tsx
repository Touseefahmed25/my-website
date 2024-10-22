// import Link from 'next/link'

// import Navbar from "../Components/Navbar";

export default function Contact() {
    return (
      <div>
        
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Contact Us</h1>

        {/* <Navbar /> */}

        {/* <Link href="/" >Home</Link>
        <br />
        <Link href="/About" >About</Link>
        <br />
        <Link href="/Admissions" >Admissions</Link>
        <br />
        <Link href="/Services" >Services</Link> */}


<p className="text-center text-large leading-relaxed max-w-xl mx-auto">If you have any questions or inquiries, feel free to reach out to us!</p>
<br />
            <div>
                <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Our Address</h2>
                <p className="text-center text-large leading-relaxed max-w-xl mx-auto">123 Coaching Lane</p>
                <p className="text-center text-large leading-relaxed max-w-xl mx-auto">City, State, ZIP</p>
            </div>
            <br />
            <div>
                <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Email Us</h2>
                <p className="text-center text-large leading-relaxed max-w-xl mx-auto">info@coachingwebsite.com</p>
            </div>
            <br />
            <div>
                <h2 className="text-bold text-center text-blue-900 mb-3 text-2xl">Call Us</h2>
                <p className="text-center text-large leading-relaxed max-w-xl mx-auto">(123) 456-7890</p>
            </div>
        </div>
    );
};

  