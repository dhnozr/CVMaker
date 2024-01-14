import React, { useState } from 'react';

export const Skills = ({ addSkills, removeSkill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);

  const [skillsData, setSkillsData] = useState({
    languages: '',
    frameworks: '',
    database: '',
    api: '',
    tools: '',
  });

  const handleEditSkills = index => {
    setEditingIndex(index);
    setSkillsData[skills[index]];
    setIsOpen(true);
  };

  const onSkillsChange = event => {
    const { name, value } = event.target;

    setSkillsData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSkills = () => {
    if (
      !skillsData.languages.trim() ||
      !skillsData.frameworks.trim() ||
      !skillsData.database.trim() ||
      !skillsData.api.trim() ||
      !skillsData.tools.trim()
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingIndex !== null) {
      setSkills(prev => prev.map((item, index) => (index === editingIndex ? skillsData : item)));
      setEditingIndex(null);
    } else {
      setSkills(prev => [...prev, skillsData]);
      addSkills(skillsData);
    }

    setSkillsData({
      languages: '',
      frameworks: '',
      database: '',
      api: '',
      tools: '',
    });
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    handleAddSkills();
    setIsOpen(false);
  };

  const removeSkills = index => {
    setSkills(prev => prev.filter((_, i) => i !== index));
    removeSkill(index);
  };

  return (
    <>
      <div className={`${isOpen ? 'bg-white p-4' : ''} `}>
        <div className={`${!isOpen ? 'grid gap-4' : ''} `}>
          {/* title */}
          <div
            className={`${
              isOpen
                ? 'flex items-center justify-between font-bold text-xl rounded-lg'
                : 'flex items-center justify-between font-bold text-xl  bg-white p-4 rounded-xl'
            }`}
          >
            <h2>Skills</h2>
            <p onClick={() => setIsOpen(prev => !prev)} className='text-4xl cursor-pointer'>
              +
            </p>
          </div>
          {/* title end */}

          {!isOpen && (
            <div>
              {skills?.map((skill, index) => (
                <div key={index} className='flex items-center p-4 justify-between bg-white rounded-lg mb-2'>
                  <p onClick={() => handleEditSkills(index)}>{skill?.languages}</p>
                  <p className='cursor-pointer' onClick={() => removeSkills(index)}>
                    🗑️
                  </p>
                </div>
              ))}
            </div>
          )}

          <form
            className={`${
              isOpen ? 'opacity-1 translate-y-0 h-full grid gap-4  ' : '-translate-y-24 opacity-0 invisible   h-0'
            } transition-all duration-300`}
          >
            <label className='flex flex-col gap-2'>
              Language
              <input
                type='text'
                placeholder='Enter Language'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='languages'
                value={skillsData.languages}
                onChange={onSkillsChange}
              />
            </label>
            <label className='flex flex-col'>
              Framework
              <input
                type='text'
                placeholder='Enter Frameworks'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='frameworks'
                value={skillsData.frameworks}
                onChange={onSkillsChange}
              />
            </label>

            <label className='flex flex-1 flex-col'>
              Database
              <input
                type='text'
                placeholder='Enter Database'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='database'
                value={skillsData.database}
                onChange={onSkillsChange}
              />
            </label>
            <label className='flex flex-1 flex-col'>
              Api
              <input
                type='text'
                placeholder='Enter API'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='api'
                value={skillsData.api}
                onChange={onSkillsChange}
              />
            </label>

            <label className='flex flex-col'>
              Tools
              <input
                type='text'
                placeholder='Enter tools'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='tools'
                value={skillsData.tools}
                onChange={onSkillsChange}
              />
            </label>

            <button className='w-fit ml-auto px-6 py-2 bg-blue-500 rounded-md' onClick={handleSubmitForm}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
