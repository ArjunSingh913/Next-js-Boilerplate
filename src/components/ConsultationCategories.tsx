const consultationData = [
  { title: 'Period doubts or Pregnancy', button: 'CONSULT NOW' },
  { title: 'Acne, pimple or skin issues', button: 'CONSULT NOW' },
  { title: 'Performance issues in bed', button: 'CONSULT NOW' },
  { title: 'Cold, cough or fever', button: 'CONSULT NOW' },
  { title: 'Child not feeling well', button: 'CONSULT NOW' },
  { title: 'Depression or anxiety', button: 'CONSULT NOW' },
];

const ConsultationCategories = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Consult Top Doctors by Speciality
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {consultationData.map((item, index) => (
          <div key={index} className="rounded-lg bg-white p-6 text-center shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-blue-600">{item.title}</h3>
            <button type="button" className="rounded-lg bg-blue-600 px-6 py-2 text-white shadow-md hover:bg-blue-700">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultationCategories;
