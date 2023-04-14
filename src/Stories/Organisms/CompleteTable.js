import React from 'react';
import TableHeader from '../Molecules/TableHeader';
import BasicTable from '../Molecules/TableMainBody';
import TableFooter from '../Molecules/TableFooter';
import { Grid } from '@mui/material';


const CompleteTable = () => {

    const tableData = [
        {
            name: 'Stuart Dent',
            title: 'Summary of overall commitments',
            heading: '123 Main Street: acme electrical',
            searchIcon: true,
            expandIcon: true,
            firstTableHeading: 'Approved To Date',
            secondTableHeading: 'When Complete',
            rows: [
                { name: 'Contract Works', firstCol: '$58,870.00', secondCol: '$644,395.00' },
                { name: 'firstCol Variation', firstCol: '$12,500.00', secondCol: '$12,500.00' },
                { name: 'UnfirstCol Variation', firstCol: '$0.00', secondCol: '$0.00' },
                { name: 'Total Works', firstCol: '$71,340.00', secondCol: '$656,895.00' },
                { name: 'Rejected Variations', firstCol: '$0.00', secondCol: '$0.00' },
            ],
            tableFooter: [
                { progress: 25, sum: '11%', text: 'complete' },
                { sum: '71,340.00', text: 'Revised Total' },
                { sum: '7,134.00', text: 'Retention Held' },
            ]
        },
        {
            name: 'My Dashboard',
            title: 'User & Company Information',
            heading: 'Respondent',
            searchIcon: false,
            expandIcon: true,
            fourRow: true,
            firstTableHeading: null,
            secondTableHeading: null,
            rows: [
                { name: 'Business Name', firstCol: 'Angus Builders LTD' },
                { name: 'Representative', firstCol: 'Angus McIntyre' },
                { name: 'Address', firstCol: '360 Collins St <br/> Melbourne <br/> 3000 Victoria' },
                { name: 'Email', firstCol: 'angus.mcintyre@payapps.com' },
                { name: 'ABN', firstCol: '54 354 354 334', secondCol: 'Phone', thirdCol: '0415258068' },
            ],
            tableFooter: null
        }
    ]

    const styles = {
        padding: '0 24px',
        marginTop: '20px'
    }

    return (
        <Grid container spacing={2} sx={styles}>
            {tableData.map((data, index) => {
                return (
                    <Grid key={index} item xs={12} xl={6}>
                        <TableHeader name={data.name} title={data.title}></TableHeader>
                        <BasicTable data={data}></BasicTable>
                        <TableFooter data={data.tableFooter} />
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default CompleteTable;