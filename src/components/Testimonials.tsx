export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "PromptPay has saved me countless hours of chasing payments. My clients appreciate the friendly reminders, and I love the automated follow-ups.",
      author: "Sarah Johnson",
      role: "Freelance Designer",
      company: "Design Studio",
    },
    {
      quote:
        "Since using PromptPay, our payment collection time has decreased by 60%. The WhatsApp integration is a game-changer!",
      author: "Michael Chen",
      role: "Founder",
      company: "Tech Solutions",
    },
    {
      quote:
        "The analytics feature helps us identify which clients need more attention. It's like having a financial assistant!",
      author: "Emma Rodriguez",
      role: "Small Business Owner",
      company: "Creative Agency",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Loved by Freelancers and Small Businesses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
