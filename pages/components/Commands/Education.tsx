import { EDUCATION } from '@/constants';
import React from 'react';

function Education() {
  return (
    <div className="divide-y divide-slate-400/25">
      {EDUCATION.map((edu, idx) => (
        <div key={idx} className="education py-2">
          <p>
            {edu.degree} - {edu.score}
          </p>

          <div className="flex text-xs text-gray-400 ">
            <p className="">{edu.college},</p>
            <p className="ml-3 ">
              {edu.duration.start && `${edu.duration.start} -`}{' '}
              {edu.duration.end}
            </p>
          </div>
        </div>
      ))}
     
    </div>
  );
}

export default Education;
