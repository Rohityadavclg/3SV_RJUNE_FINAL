 
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFacultyById, fetchFaculty } from '../../../slices/facultySlice';     
const FacultyImageDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const faculty = useSelector((state) => selectFacultyById(state, parseInt(id)));
  const error = useSelector((state) => state.faculty.error); // Example of accessing error state

  useEffect(() => {
    dispatch(fetchFaculty());
  }, [dispatch]);

  if (!faculty) {
    return <div>No data found for ID {id}</div>;
  }

  return ( 
    <div className="max-w-full mx-auto font-bold text-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
  <div className="md:flex flex-wrap">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:w-48" src={faculty.imgSrc} alt={faculty.name} />
    </div>
    <div className="md:mt-4 md:ml-6 flex-1 p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {faculty.CurrentDesignation.Title} - {faculty.CurrentDesignation.Company}
      </div>
      <h1 className="block mt-4 text-2xl leading-tight font-medium text-black border-b-2 border-gray-300 pb-2">{faculty.name}</h1>
      <p className="mt-2 text-gray-500">{faculty.TotalExperience} of Experience</p>
      <p className="mt-2 text-gray-500">{faculty.CurrentDesignation.Location}</p>
      <div className="mt-6">
        <h2 className="text-lg text-gray-900 font-semibold border-b-2 border-gray-300 pb-2">Areas of Involvement:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {faculty.AreasOfInvolvement.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg text-gray-900 font-semibold border-b-2 border-gray-300 pb-2">Educational Background:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {faculty.EducationalBackground.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg text-gray-900 font-semibold border-b-2 border-gray-300 pb-2">Certifications:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {faculty.Certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg text-gray-900 font-semibold border-b-2 border-gray-300 pb-2">Prior Academic Designations:</h2>
        {faculty.PriorAcademicDesignations.map((designation, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-md text-gray-700 font-semibold">{designation.Title}</h3>
            <p className="text-gray-700">{designation.Institution}</p>
            <p className="text-gray-700">{designation.Duration}</p>
            {designation.Details && (
              <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                {designation.Details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-lg text-gray-900 font-semibold border-b-2 border-gray-300 pb-2">Prior Industry Designations:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {faculty.PriorIndustryDesignations.map((designation, index) => (
            <li key={index}>{designation}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg text-gray-900 font-semibold border-b-2 border-gray-300 pb-2">Professional Growth Activities:</h2>
        <table className="min-w-full bg-gray-200 text-gray-700 mt-2">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              <th className="w-1/3 px-4 py-2">Activity</th>
              <th className="w-2/3 px-4 py-2">Count</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {Object.entries(faculty.ProfessionalGrowthActivities).map(([activity, count], index) => (
              <tr key={index} className="bg-gray-200">
                <td className="border px-4 py-2">{activity.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                <td className="border px-4 py-2">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )  
} 

export default FacultyImageDetail;

