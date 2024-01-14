import { useState } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';
import { Experience } from './components/Experience';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    tel: '',
    address: '',
    social: '',
  });

  const [schools, setSchools] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const addSchools = newSchool => {
    setSchools(prev => ({ ...prev, newSchool }));
  };

  const addExperience = newExperience => {
    setExperiences(prev => ({ ...prev, newExperience }));
  };

  const onPersonalInfoChange = event => {
    const { name, value } = event.target;
    setPersonalInfo(prevValue => ({ ...prevValue, [name]: value }));
  };

  return (
    <>
      <div className='min-h-screen  bg-[#f3f4f6] flex justify-center  py-4 gap-10'>
        <div className='max-w-[500px] w-full p-2'>
          <div className='mb-4 '>
            <PersonalInfo personalInfo={personalInfo} onChange={onPersonalInfoChange} />
          </div>
          <div>
            <Education addSchools={addSchools} />
          </div>
          <div>
            <Experience addExperience={addExperience} />
          </div>
        </div>

        {/* right side */}
        <div className=' bg-white  max-w-[570px] min-h-screen  w-full p-2'>
          {/* top section personal info */}
          <div className='flex flex-col items-center border-b '>
            <div>
              <h2 className='text-4xl'>{personalInfo.fullName || 'Duhan Ozarslan'}</h2>
            </div>
            <div className='flex justify-center gap-1 text-sm'>
              <p>{personalInfo.email || 'r.d.ozarslan@gmail.com'}</p>&#183;
              <p>{personalInfo.tel || '552 451 90 59'}</p>&#183;
              <p>{personalInfo.address || 'Istanbul'}</p>&#183;
              <p>{personalInfo.social || 'www.linkedin.com/in/duhanozarslan'}</p>
            </div>
          </div>
          {/* top section end */}
        </div>
      </div>
    </>
  );
}

export default App;
