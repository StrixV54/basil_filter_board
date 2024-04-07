import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface StatusProps {
  status: string;
  onClick: () => void;
}

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Chip: React.FC<StatusProps> = ({ status, onClick }) => {
  return (
    <div className={classNames(
      'rounded-full py-1 px-2 text-xs text-[#5d6679] ring-1 ring-[#f1f1f1] flex items-center mr-3'
    )}>
      {status.toUpperCase()}
      <XMarkIcon className='ml-2 w-4 h-4 cursor-pointer' onClick={onClick} />
    </div>
  );
};

export default Chip;
