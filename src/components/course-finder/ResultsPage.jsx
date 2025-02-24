import React, { useState, useEffect } from 'react';
import universitiesData from '../../data/university.json';

export default function ResultsPage({ selectedFilters }) {
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Filter universities based on selected criteria
    const filterResults = () => {
      setLoading(true);
      const country = selectedFilters.country || '';
      const studyArea = selectedFilters.studyArea || '';
      const degree = selectedFilters.degree || '';

      const universities = universitiesData[country] || [];
      
      const filtered = universities.map(university => ({
        ...university,
        courses: university.courses.filter(course => 
          (!studyArea || course.area === studyArea)
        )
      })).filter(university => university.courses.length > 0);

      setFilteredUniversities(filtered);
      setLoading(false);
    };

    filterResults();
  }, [selectedFilters]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
          <p className="text-gray-600 mt-2">
            Found {filteredUniversities.length} universities matching your criteria
          </p>
        </div>

        {/* Filters Summary */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <h2 className="text-lg font-semibold mb-2">Selected Filters</h2>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.country && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {selectedFilters.country}
              </span>
            )}
            {selectedFilters.studyArea && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {selectedFilters.studyArea}
              </span>
            )}
            {selectedFilters.degree && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {selectedFilters.degree}
              </span>
            )}
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map(university => (
            <div key={university.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={university.image} 
                alt={university.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-4">{university.location}</p>
                
                {/* Courses */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Available Courses</h4>
                  {university.courses.map(course => (
                    <div key={course.id} className="border-l-4 border-orange-500 pl-4 py-2">
                      <h5 className="font-medium text-gray-900">{course.name}</h5>
                      <div className="text-sm text-gray-600 mt-1">
                        <p>Duration: {course.duration}</p>
                        <p>Tuition: {course.tuition}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Apply Button */}
                <button className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
}