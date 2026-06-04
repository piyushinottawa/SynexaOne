export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-3xl p-8">
        <h1 className="text-5xl font-bold mb-6">
          Piyush Agarwal 
        </h1>

        <h2 className="text-2xl text-blue-600 mb-6">
          Cybersecurity & Cloud Transformation Leader
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          At OttawaIT, we are dedicated to providing top-notch IT consulting services to our clients. Our mission is to help businesses of all sizes reach their full potential through the use of technology.
        </p>

        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            View Portfolio
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}