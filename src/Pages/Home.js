import React from 'react';
import ApplicationBar from '../Stories/Organisms/ApplicationBar';
import Pagination from '../Stories/Organisms/Pagination';
import TableData from '../Stories/Organisms/CompleteTable';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#FAFAF9", height: '100vh' }}>
            <Pagination />
            <ApplicationBar></ApplicationBar>
            <TableData></TableData>
        </div>
    );
};

export default Home;