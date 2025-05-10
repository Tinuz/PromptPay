export default function Features() {
  const features = [
    {
      title: "Friendly, Automated Reminders",
      description:
        "Send personalized reminders via email and WhatsApp that maintain your professional relationship.",
      icon: "🤖",
    },
    {
      title: "Smart Follow-ups",
      description:
        "AI-powered reminders that adapt to each client's payment behavior for better results.",
      icon: "🎯",
    },
    {
      title: "Clean Dashboard",
      description:
        "Get a clear overview of all overdue payments and upcoming reminders in one place.",
      icon: "📊",
    },
    {
      title: "Popular Tool Integrations",
      description:
        "Seamlessly connect with Moneybird, Exact, e-Boekhouden, and more.",
      icon: "🔄",
    },
    {
      title: "Stress-free Payments",
      description:
        "No more awkward phone calls or manual follow-ups — just faster payments.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Get Paid Faster
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built by a solo founder, for fellow entrepreneurs. Refined through
            feedback from real freelancers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
