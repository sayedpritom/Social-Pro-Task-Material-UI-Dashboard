import React from 'react';
import ApplicationBar from '../Stories/Organisms/ApplicationBar';
import Pagination from '../Stories/Organisms/Pagination';
import TableData from '../Stories/Organisms/CompleteTable';
import Charts from '../Stories/Organisms/Charts';
import SocialProLogo from '../Stories/Atoms/SocialProLogo';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#FAFAF9" }}>
            <Pagination />
            <ApplicationBar></ApplicationBar>
            <TableData></TableData>
            <Charts/>
            <SocialProLogo/>
        </div>
    );
};

export default Home;