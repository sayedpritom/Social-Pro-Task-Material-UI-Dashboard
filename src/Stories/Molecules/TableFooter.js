import React from 'react';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';

const style = {
    textAlign: 'left',
    backgroundColor: "white",
    marginTop: "15px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: '2px',
}

const itemStyle = {
    borderRight: '5px solid #EFEEED',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '12px 10px',
    margin: '8px 0'
}

const emptyBoxStyle = {
    backgroundColor: "white",
    marginTop: "0px",
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 2px 3px",
    borderRadius: '2px',
    width: 'auto',
    height: '85px'
}


const TableFooter = (props) => {

    const data = props.data;

    return (
        <>
            {data === null ? <Box container sx={emptyBoxStyle}></Box> :
                <Box sx={style}>
                    <Grid container spacing={2} >
                        {
                            data?.map((item, index) => {
                                return (
                                    <Grid key={index} xs={4} sx={index === (data.length - 1) ? { ...itemStyle, borderRight: 'none' } : { ...itemStyle }}>
                                        {item.progress && <CircularProgress variant="determinate" value={item.progress} sx={{ marginRight: '15px' }} />}
                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold', color: '#565857' }}>${item.sum}</Typography>
                                            <Typography sx={{ textTransform: 'uppercase', color: 'gray', fontSize: "14px" }}>{item.text}</Typography>
                                        </Box>
                                    </Grid>)
                            })
                        }
                    </Grid>
                </Box >}
        </>
    );
};

export default TableFooter;