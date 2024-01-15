import React, { useState } from 'react';

export const Education = ({ addSchools, removeSchool }) => {
  const [schools, setSchools] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditSchool = index => {
    setEditingIndex(index);
    setEducation[schools[index]];
    setIsOpen(true);
  };

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    description: '',
    location: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const onEducationChange = event => {
    const { name, value } = event.target;

    setEducation(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleaddSchool = () => {
    if (!education.school.trim() || !education.degree.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingIndex !== null) {
      setSchools(prev => prev.map((item, index) => (index === editingIndex ? education : item)));
      setEditingIndex(null);
    } else {
      addSchools(education);
      setSchools(prev => [...prev, education]);
    }

    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
      location: '',
    });
  };

  const removeSchools = index => {
    setSchools(prev => prev.filter((_, i) => i !== index));
    removeSchool(index);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    handleaddSchool();
    setIsOpen(false);
  };

  return (
    <>
      <div className={`${isOpen ? 'bg-white p-4 mb-4' : ''} `}>
        <div className={`${!isOpen ? 'grid gap-4' : ''} `}>
          {/* title */}
          <div
            className={`${
              isOpen
                ? 'flex items-center justify-between font-bold text-xl rounded-lg'
                : 'flex items-center justify-between font-bold text-xl  bg-white p-4 rounded-xl'
            }`}
          >
            <h2>Education</h2>
            <p onClick={() => setIsOpen(prev => !prev)} className='text-4xl cursor-pointer'>
              +
            </p>
          </div>
          {/* title end */}

          {!isOpen && (
            <div className='mb-4'>
              {schools?.map((school, index) => (
                <div key={index} className='flex items-center  justify-between mb-3 bg-white rounded-lg p-4'>
                  <p onClick={() => handleEditSchool(index)}>{school?.school}</p>
                  <p onClick={() => removeSchools(index)}>🗑️</p>
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
              School
              <input
                type='text'
                placeholder='Enter Scholl'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='school'
                value={education.school}
                onChange={onEducationChange}
              />
            </label>
            <label className='flex flex-col gap-2'>
              Degree
              <input
                type='text'
                placeholder='Field of Study'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='degree'
                value={education.degree}
                onChange={onEducationChange}
              />
            </label>
            <div className='flex item justify-between gap-4 '>
              <label className='flex flex-1 flex-col gap-2'>
                Start Date
                <input
                  type='number'
                  placeholder='Start Date'
                  className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                  name='startDate'
                  value={education.startDate}
                  onChange={onEducationChange}
                />
              </label>
              <label className='flex flex-1 flex-col gap-2'>
                End Date
                <input
                  type='number'
                  placeholder='End Date'
                  className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                  name='endDate'
                  value={education.endDate}
                  onChange={onEducationChange}
                />
              </label>
            </div>
            <label className='flex flex-col gap-2'>
              Location
              <input
                type='text'
                placeholder='Location'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='location'
                value={education.location}
                onChange={onEducationChange}
              />
            </label>
            <label className='flex flex-col gap-2'>
              Description
              <input
                type='text'
                placeholder='Optional'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='description'
                value={education.description}
                onChange={onEducationChange}
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
