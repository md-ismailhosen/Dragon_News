import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
import CurrentTime from '../CurrenTime/CurrentTime';

const Header = () => {
    return(
    <div className='flex justify-center flex-col items-center gap-3 pt-5'>
            
        <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>
                {/* {format(new Date(),"EEEE, MMMM, MM, yyyy")} */}
                <CurrentTime></CurrentTime>

            </p>

    </div>
)
};

export default Header;