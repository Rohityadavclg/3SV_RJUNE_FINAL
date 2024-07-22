import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFaculty, selectAllFaculty } from '../../../slices/facultySlice'; 
 
const FacultyList = () => {
  const dispatch = useDispatch();
  const facultyData = useSelector(selectAllFaculty);
  const status = useSelector((state) => state.faculty.status);
  const error = useSelector((state) => state.faculty.error);

  useEffect(() => {
    dispatch(fetchFaculty());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="  items-center justify-center  ">Faculty List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {facultyData.map((faculty) => (
          <div key={faculty.Id} className="border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{faculty.CurrentDesignation?.Title}</h3>
             <div className='p-4'>
             <div className="flex justify-center mb-4">
            <img
             src={faculty.imgSrc}
            
            className="w-32 h-32 rounded-full object-cover"
           />
          </div>
             </div>
            <p className="text-gray-700 mb-2">{faculty.CurrentDesignation?.Company}, {faculty.CurrentDesignation?.Location}</p>
            <Link
  to={`/faculty/${faculty.Id}`}
  className="inline-block bg-blue-500 hover:bg-blue-600 text-gray-700 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out shadow-md hover:shadow-lg"
  > View Details
</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyList;