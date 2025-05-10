export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Stop Chasing Payments,
          <br />
          Start Growing Your Business
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          PromptPay automates your invoice follow-ups, so you can focus on what
          you do best. Join thousands of freelancers and small businesses who
          get paid on time, every time.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200">
          Join the waitlist
        </button>
      </div>
    </section>
  );
}
