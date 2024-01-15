import React, { useState } from 'react';

export const Experience = ({ addExperience, removeExperience }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [detail, setDetail] = useState('');

  const [experienceData, setExperienceData] = useState({
    companyName: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
    details: [],
  });

  const handleAddDetail = () => {
    if (detail.trim()) {
      setExperienceData(prevData => ({
        ...prevData,
        details: [...prevData.details, detail],
      }));
      setDetail(''); // Clear the detail input after adding
    }
  };

  const handleEditExperience = index => {
    setEditingIndex(index);
    setExperienceData[experiences[index]];
    setIsOpen(true);
  };

  const onExperienceChange = event => {
    const { name, value } = event.target;

    setExperienceData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddExperience = () => {
    if (
      !experienceData.companyName.trim() ||
      !experienceData.positionTitle.trim() ||
      !experienceData.startDate.trim() ||
      !experienceData.endDate.trim() ||
      !experienceData.description.trim()
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingIndex !== null) {
      setExperiences(prev => prev.map((item, index) => (index === editingIndex ? experienceData : item)));
      setEditingIndex(null);
    } else {
      setExperiences(prev => [...prev, experienceData]);
      addExperience(experienceData);
    }

    setExperienceData({
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      details: [],
    });
  };

  const removeExperiences = index => {
    setExperiences(prev => prev.filter((_, i) => i !== index));
    removeExperience(index);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    handleAddExperience();
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
            <h2>Experience</h2>
            <p onClick={() => setIsOpen(prev => !prev)} className='text-4xl cursor-pointer'>
              +
            </p>
          </div>
          {/* title end */}

          {!isOpen && (
            <div className='mb-4'>
              {experiences?.map((exp, index) => (
                <div key={index} className='flex items-center p-4 justify-between bg-white rounded-lg mb-3'>
                  <p onClick={() => handleEditExperience(index)}>{exp?.companyName}</p>
                  <p className='cursor-pointer' onClick={() => removeExperiences(index)}>
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
              Company / Projects
              <input
                type='text'
                placeholder='Enter Company or Project'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='companyName'
                value={experienceData.companyName}
                onChange={onExperienceChange}
              />
            </label>
            <label className='flex flex-col'>
              Position Title
              <input
                type='text'
                placeholder='Position Title'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='positionTitle'
                value={experienceData.positionTitle}
                onChange={onExperienceChange}
              />
            </label>
            <div className='flex item justify-between gap-4 '>
              <label className='flex flex-1 flex-col'>
                Start Date
                <input
                  type='text'
                  placeholder='Start Date'
                  className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                  name='startDate'
                  value={experienceData.startDate}
                  onChange={onExperienceChange}
                />
              </label>
              <label className='flex flex-1 flex-col'>
                End Date
                <input
                  type='text'
                  placeholder='End Date'
                  className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                  name='endDate'
                  value={experienceData.endDate}
                  onChange={onExperienceChange}
                />
              </label>
            </div>
            <label className='flex flex-col'>
              Location
              <input
                type='text'
                placeholder='Location'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='location'
                value={experienceData.location}
                onChange={onExperienceChange}
              />
            </label>

            <label className='flex flex-col'>
              Description
              <input
                type='text'
                placeholder='Optional'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='description'
                value={experienceData.description}
                onChange={onExperienceChange}
              />
            </label>

            <label className='flex flex-col gap-2'>
              Details
              <input
                type='text'
                placeholder='Details'
                className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
                name='details'
                value={detail}
                onChange={e => setDetail(e.target.value)}
              />
              <button
                className='bg-gray-700 w-fit px-3 text-white py-1 rounded-lg'
                type='button'
                onClick={handleAddDetail}
              >
                Add Details
              </button>
            </label>

            <button className='w-fit ml-auto px-8 py-2 bg-blue-500 rounded-md text-white' onClick={handleSubmitForm}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
