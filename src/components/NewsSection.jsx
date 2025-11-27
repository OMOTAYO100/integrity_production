import { useState, useEffect } from 'react';

function NewsSection() {
  const [fetchData, setFetchData] = useState(null);
  const searchTerm = 'album'

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=53353dfeb5774b44b927225e1621ad0a`;

    const loadData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFetchData(data);
        console.log(data)
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="max-w-full bg-black mx-auto p-6 md:p-20">
      {!fetchData && (
        <p className="text-center text-gray-500 animate-pulse text-lg">
          Loading news...
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fetchData?.articles?.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {item.urlToImage ? (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
            ) : (
              <div className="h-40 w-full bg-gray-300"></div>
            )}

            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {item.description
                  ? item.description
                  : "No description available."}
              </p>

              <a
                href={item.url}
                target="_blank"
                className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                rel="noreferrer"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;
