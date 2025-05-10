export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let PromptPay automatically follow up on your invoices — friendly,
              effective, and stress-free.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Get paid faster without chasing clients.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200">
              Join the waitlist
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto lg:mx-0">
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">PP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">PromptPay</p>
                  <p className="text-sm text-gray-500">Automated Reminder</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">Hi Mark,</p>
              <p className="text-gray-700">
                Just a quick reminder that invoice #201 is still open. Could you
                settle it before Friday?
              </p>
              <p className="text-gray-700">Thanks!</p>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">
                  Sent via WhatsApp • Friendly reminder #2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
