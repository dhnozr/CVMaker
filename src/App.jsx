import { useState } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { PdfRender } from './components/PdfRender';
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
  const [skills, setSkills] = useState([]);

  const addSchools = newSchool => {
    setSchools(prev => [...prev, newSchool]);
  };

  const removeSchool = index => {
    setSchools(prev => prev.filter((_, i) => i !== index));
  };

  const removeExperience = index => {
    setExperiences(prev => prev.filter((_, i) => i !== index));
  };

  const addExperience = newExperience => {
    setExperiences(prev => [...prev, newExperience]);
  };

  const addSkills = newSkill => {
    setSkills(prev => [...prev, newSkill]);
  };

  const removeSkills = index => {
    setSkills(prev => prev.filter((_, i) => i !== index));
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
            <Education addSchools={addSchools} removeSchool={removeSchool} />
          </div>
          <div>
            <Experience addExperience={addExperience} removeExperience={removeExperience} />
          </div>
          <div>
            <Skills addSkills={addSkills} removeSkill={removeSkills} />
          </div>
          <div>
            <PdfRender personalInfo={personalInfo} experiences={experiences} skills={skills} schools={schools} />
          </div>
        </div>

        {/* right side */}
        <div className=' bg-white  max-w-[570px] min-h-screen  w-full p-2'>
          {/* top section personal info */}
          <div className='flex flex-col items-center mb-4'>
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

          {/* show experience */}
          {experiences.length >= 1 ? (
            <div className='mb-4'>
              <h2 className='text-xl uppercase border-b border-black mb-2'>Experience</h2>
              {experiences.map((exp, index) => (
                <div className='px-4' key={index}>
                  <div className='flex justify-between mb-2'>
                    <div>
                      <p className='font-semibold'>{exp?.companyName}</p>
                      <p className='italic'>{exp?.positionTitle}</p>
                    </div>
                    <div className='flex flex-col items-end'>
                      <p>{exp?.location}</p>
                      <div className='flex gap-1'>
                        <p>{exp?.startDate}</p> / <p>{exp?.endDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <p>{exp?.description}</p>
                  </div>
                  {exp.details.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </div>
              ))}
            </div>
          ) : null}

          {/* show skills */}

          {skills.length >= 1 ? (
            <div className='mb-4'>
              <h2 className='text-xl uppercase border-b border-black mb-2'>Skills</h2>
              {skills.map((skill, index) => (
                <div className='px-4' key={index}>
                  <div className='flex items-center gap-2'>
                    <p className='w-24'>Languages:</p>
                    <p>{skill?.languages}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='w-24'>Frameworks:</p>
                    <p>{skill?.frameworks}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='w-24'>Databases:</p>
                    <p>{skill?.database}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='w-24'>API:</p>
                    <p>{skill?.api}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='w-24'>Tools:</p>
                    <p>{skill?.tools}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/* show education  */}
          {schools.length >= 1 ? (
            <div>
              <h2 className='text-xl uppercase border-b border-black mb-2'>Education</h2>
              {schools.map((school, index) => (
                <div className='px-4 mb-4' key={index}>
                  <div className='flex justify-between items-center gap-2'>
                    <div>
                      <p className='font-semibold'>{school?.school}</p>
                      <p className='italic'>{school?.degree}</p>
                    </div>

                    <div className='flex flex-col items-end  gap-1'>
                      <p>{school?.location}</p>
                      <div className='flex gap-1'>
                        <p>{school?.startDate}</p> / <p>{school?.endDate}</p>
                      </div>
                    </div>
                  </div>

                  <p className='p-1'>{school?.description}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
