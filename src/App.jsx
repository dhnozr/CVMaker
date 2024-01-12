import { useState } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',

    email: '',
    tel: '',
    address: '',
    social: '',
  });

  const onPersonalInfoChange = event => {
    const { name, value } = event.target;
    setPersonalInfo(prevValue => ({ ...prevValue, [name]: value }));
  };

  return (
    <>
      <div className='h-screen bg-[#f3f4f6] flex justify-between px-32 py-4 gap-10'>
        <div className='max-w-[320px] w-full'>
          <PersonalInfo personalInfo={personalInfo} onChange={onPersonalInfoChange} />
          <Education />
        </div>

        {/* right side */}
        <div className='border bg-white flex-1 max-w-xl p-2'>
          {/* top section personal info */}
          <div className='flex flex-col items-center'>
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
