import React, { useState } from 'react';

export const Education = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col gap-2 '>
      <button onClick={() => setIsOpen(prev => !prev)} className=''>
        Education +
      </button>

      {/* education drawer part */}
      <div
        className={`${isOpen ? 'max-h-[400px] ' : 'max-h-0  '} overflow-hidden bg-white transition-all duration-500  `}
      >
        <div className='flex flex-col'>
          <label htmlFor='education'>Okul adi</label>
          <input className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1' type='text' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='education'>Okul adi</label>
          <input className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1' type='text' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='education'>Okul adi</label>
          <input className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1' type='text' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='education'>Okul adi</label>
          <input className='shadow-sm bg-slate-100 rounded-lg  indent-2 p-1' type='text' />
        </div>
      </div>
    </div>
  );
};
