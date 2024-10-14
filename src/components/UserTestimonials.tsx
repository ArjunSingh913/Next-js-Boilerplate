const testimonials = [
  {
    text: 'The consultation was quick and easy, and the doctor was very professional.',
    user: 'John Doe',
  },
  {
    text: 'I booked an appointment for my child, and it was a great experience.',
    user: 'Jane Smith',
  },
];

const UserTestimonials = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          What our users have to say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
              <p className="mb-4 text-gray-600">
                "
                {testimonial.text}
                "
              </p>
              <p className="text-sm font-bold text-blue-600">
                -
                {testimonial.user}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
