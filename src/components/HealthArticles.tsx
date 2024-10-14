const articlesData = [
  {
    title: '12 Coronavirus Myths and Facts That You Should Be Aware Of',
    author: 'Dr. Diana Borgio',
    category: 'Coronavirus',
  },
  {
    title: 'Eating Right to Build Immunity Against Cold and Viral Infections',
    author: 'Dr. Diana Borgio',
    category: 'Vitamins and Supplements',
  },
];

const HealthArticles = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Health Articles from Experts
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {articlesData.map((article, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-blue-600">{article.title}</h3>
            <p className="text-gray-600">
              By
              {article.author}
            </p>
            <p className="text-sm text-gray-500">{article.category}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button type="button" className="rounded-lg bg-blue-600 px-6 py-2 text-white shadow-md hover:bg-blue-700">
          See All Articles
        </button>
      </div>
    </section>
  );
};

export default HealthArticles;
