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
              Automate payment reminders and improve your cash flow without
              lifting a finger.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200">
              Get Early Access
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="border-b pb-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Dashboard Overview
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Open Invoices</p>
                  <p className="text-2xl font-bold text-gray-900">€12,450</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Paid This Month</p>
                  <p className="text-2xl font-bold text-gray-900">€8,320</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Recent Activity
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Invoice #201 - Design Studio
                    </span>
                    <span className="text-red-600">Overdue</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Invoice #202 - Tech Solutions
                    </span>
                    <span className="text-green-600">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
