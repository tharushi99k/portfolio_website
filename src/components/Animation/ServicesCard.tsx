import { CursorArrowRaysIcon } from '@heroicons/react/16/solid';
import { CodeBracketIcon, CommandLineIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
    title: string;
    num: string;
    descrip: string;
}

const iconMapping = {
    "01": ComputerDesktopIcon,
    "02": DevicePhoneMobileIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
};

const ServicesCard: React.FC<Props> = ({ num, title, descrip }) => {
    const IconComponent = (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;
    return (
        <div className='custom_service border border-[#01F191]  z-[100] relative transform rounded-2xl text-center p-6 shadow-md'>
            <IconComponent className='w-14 relative z-[1] mx-auto h-20 text-[#01F191]' />
            <h1 className='text-2xl relative z-[1] text-white mt-4'>
                {title}
            </h1>
            <p className='text-white text-sm opacity-60 mt-3'>
                {descrip}
            </p>
            <h3 className='text-white text-2xl font-bold absolute top-3 right-4'>{num}</h3>
        </div>
    );
}

export default ServicesCard;
