export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How PromptPay Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Friendly, automated reminders that maintain your professional
            relationship with clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Set Up Your Reminders
                </h3>
                <p className="text-gray-600">
                  Configure your preferred tone and timing for payment
                  reminders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Automated Follow-ups
                </h3>
                <p className="text-gray-600">
                  PromptPay sends friendly reminders via email and WhatsApp when
                  invoices are due.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Track Results
                </h3>
                <p className="text-gray-600">
                  Monitor payment status and get insights into client payment
                  behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
