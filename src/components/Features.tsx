export default function Features() {
  const features = [
    {
      title: "Smart, Automated Reminders",
      description:
        "Set up personalized reminder sequences that match your tone and brand voice.",
      icon: "🤖",
    },
    {
      title: "Multi-channel Follow-ups",
      description:
        "Reach clients through both WhatsApp and email for maximum response rates.",
      icon: "📱",
    },
    {
      title: "Payment Analytics",
      description:
        "Get insights into client payment behavior and optimize your collection strategy.",
      icon: "📊",
    },
    {
      title: "Popular Tool Integrations",
      description:
        "Seamlessly connect with Moneybird, Exact, e-Boekhouden, and more.",
      icon: "🔄",
    },
    {
      title: "Clear Dashboard",
      description:
        "Track all invoices and payments in one easy-to-use dashboard.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need to Get Paid Faster
        </h2>
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
