import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';
import parse from 'html-react-parser';

const tableStyles = {
  color: "#A09FA0",
  fontWeight: "bold",
  padding: "8px 10px",
}

export default function TableMainBody(props) {

  const { heading, firstTableHeading, secondTableHeading, searchIcon, expandIcon, rows, fourRow } = props.data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, color: "#A09FA0" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ textTransform: "upperCase", color: "#989797", ...tableStyles }} >{heading}</TableCell>
            <TableCell></TableCell>
            {fourRow && <TableCell></TableCell>}
            <TableCell align="right">
              {searchIcon && <SearchIcon color='primary' />}
              {expandIcon && <ExpandLessIcon color='primary' />}
            </TableCell>
          </TableRow>
          {
            (firstTableHeading || secondTableHeading) && <TableRow>
              <TableCell></TableCell>
              <TableCell align="right" sx={{ padding: "5px 10px", ...tableStyles }} >{firstTableHeading}</TableCell>
              <TableCell align="right" sx={{ padding: "5px 10px", ...tableStyles }} >{secondTableHeading}</TableCell>
            </TableRow>
          }
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {
                fourRow ? <>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} component="th" scope="row">{row.name}</TableCell>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} align="right">{parse(row.firstCol)}</TableCell>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} align="right">{row.secondCol}</TableCell>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} align="right">{row.thirdCol}</TableCell>
                </> : <>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} component="th" scope="row">{row.name}</TableCell>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} align="right">{parse(row.firstCol)}</TableCell>
                  <TableCell sx={{ backgroundColor: '#FAF9FA', ...tableStyles }} align="right">{row.secondCol}</TableCell>
                </>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
  );
}