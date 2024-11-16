

const FashionCompanies = () => {
  const testimonials = [
    {
      text: "This service has completely transformed my workflow. Highly recommend to anyone looking for reliable and efficient tools.",
      name: "Sir. Joeflex",
      role: "Product Manager",
      img: "https://via.placeholder.com/50",
    },
    {
      text: "Amazing support and a fantastic product. I've been using it for years, and it keeps getting better.",
      name: "Campton Eze",
      role: "Stock Broker",
      img: "https://via.placeholder.com/50",
    },
    {
      text: "I've tried many options, but this one stands out. The quality and attention to detail are unmatched.",
      name: "Emilie Clarks",
      role: "Entrepreneur",
      img: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="bg-transparent  min-h-screen flex items-center justify-center">
      <section className="py-12 px-6 sm:px-12 lg:px-15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/30 backdrop-blur-md shadow-lg rounded-lg border border-white/20"
              >
                <p className="text-gray-200 mb-4">{testimonial.text}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionCompanies;
