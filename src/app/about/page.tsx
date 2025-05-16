""; // Add this line to make it a client component if needed for interactivity, otherwise remove for server component
import type { Metadata } from 'next';
// import Image from 'next/image'; // For potential team photos or illustrative graphics

export const metadata: Metadata = {
  title: 'About Us - Choice Insurance Agency',
  description: 'Learn about Choice Insurance Agency, our mission, values, and commitment to providing expert insurance guidance.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">About Choice Insurance Agency</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choice Insurance is an independent insurance agency with a longstanding commitment to serving the diverse insurance needs of individuals, families, and businesses. Founded on the principles of integrity, transparency, and client-focused service, we have grown by consistently putting our clients first. We specialize in Medicare Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans, partnering with a wide array of major insurance carriers. This independence allows us to offer a broad spectrum of coverage options, ensuring that our clients receive plans tailored to their specific circumstances and budgets.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our reach extends across Illinois and several other states, including Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas. This multi-state presence provides us with valuable insights into diverse insurance landscapes, enabling us to offer informed and comprehensive advice. We are dedicated to preparing you for tomorrow by closing today’s healthcare and financial gaps with smart, affordable, and personalized insurance solutions.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission and Values</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <strong>Mission:</strong> To empower our clients to make informed insurance decisions by providing expert guidance, personalized service, and a comprehensive range of high-quality, affordable insurance products. We strive to build long-term relationships based on trust and a deep understanding of our clients' evolving needs.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Integrity:</strong> We conduct our business with the utmost honesty and ethical standards.</li>
          <li><strong>Client-Centricity:</strong> Our clients' needs and best interests are at the heart of everything we do.</li>
          <li><strong>Expertise:</strong> We are committed to continuous learning and staying abreast of industry changes to provide knowledgeable advice.</li>
          <li><strong>Choice:</strong> As an independent agency, we offer a wide selection of plans to ensure the best fit for each client.</li>
          <li><strong>Advocacy:</strong> We stand by our clients, especially during challenging times like claims processing or navigating complex coverage issues.</li>
        </ul>
      </section>

      {/* Optional: Meet the Team Section */}
      {/* 
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src={member.imageUrl || "/placeholder-avatar.png"} alt={member.name} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600">{member.title}</p>
              <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      */}

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Commitment to You</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Choice Insurance Agency, we understand that navigating the world of insurance can be complex and overwhelming. That’s why we are committed to providing a client-first approach. We listen to your concerns, analyze your needs, and explain your options in clear, understandable language. Our goal is not just to sell you a policy, but to build a lasting relationship as your trusted insurance advisor. We are here to support you every step of the way, from selecting the right plan to assisting with claims and policy reviews. Your peace of mind is our priority.
        </p>
      </section>

      <section className="text-center py-8 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Ready to Discuss Your Insurance Needs?</h2>
        <p className="text-lg text-gray-700 mb-6">Let us help you find the perfect coverage. Contact us today for a no-obligation consultation.</p>
        <a href="/contact#book-a-call" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
          Book a Free Consultation
        </a>
      </section>
    </div>
  );
}

