import React from 'react';

export const PersonalInfo = ({ personalInfo, onChange }) => {
  return (
    <div>
      <div className='border flex flex-col gap-2 bg-white p-4 rounded-xl  '>
        <div>
          <h2 className='text-2xl font-bold'>Personal Details</h2>
        </div>
        <label htmlFor='fullName'>Full name</label>
        <input
          className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
          type='text'
          name='fullName'
          id='fullName'
          placeholder='Duhan Ozarslan'
          value={personalInfo.fullName}
          onChange={onChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
          name='email'
          id='email'
          type='email'
          placeholder='r.d.ozarslan@gmail.com'
          value={personalInfo.email}
          onChange={onChange}
        />
        <label htmlFor='tel'>Phone Number</label>
        <input
          className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
          name='tel'
          id='tel'
          type='tel'
          placeholder='552 451 9059'
          value={personalInfo.tel}
          onChange={onChange}
        />
        <label htmlFor='address'>Address</label>
        <input
          className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1'
          name='address'
          id='address'
          type='text'
          placeholder='Istanbul'
          value={personalInfo.address}
          onChange={onChange}
        />
        <label htmlFor='social'>Social</label>
        <input
          className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1 '
          name='social'
          id='social'
          type='text'
          placeholder='www.linkedin.com/in/duhanozarslan'
          value={personalInfo.social}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
