import React from 'react';
import ApplicationBar from '../Stories/Organisms/ApplicationBar';
import Pagination from '../Stories/Organisms/Pagination';
import TableData from '../Stories/Organisms/CompleteTable';
import Charts from '../Stories/Organisms/Charts';
import AppX from '../Stories/Molecules/Chart';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#FAFAF9", height: '100vh' }}>
            <Pagination />
            <ApplicationBar></ApplicationBar>
            <TableData></TableData>
            {/* <Charts/> */}
            <AppX></AppX>
        </div>
    );
};

export default Home;