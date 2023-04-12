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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Contract Works', '$58870.00', '$644,395.00'),
  createData('Approved Variation', '$12,500.00', '$12,500.00'),
  createData('Unapproved Variation', '$0.00', '$0.00'),
  createData('Total Works', '$71,340.00', '$656,895.00'),
  createData('Rejected Variations', '$0.00', '$0.00'),
];

const tableDataStyles = {
  color: "#A09FA0",
  fontWeight: "bold",
  padding: "8px 10px",
}

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, color: "#A09FA0" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ textTransform: "upperCase", color: "#989797", ...tableDataStyles}} >123 Main Street: acme electrical</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              <SearchIcon color='primary' />
              <ExpandLessIcon color='primary' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" sx={{ padding: "5px 10px", ...tableDataStyles }} >Approved To Date</TableCell>
            <TableCell align="right" sx={{ padding: "5px 10px", ...tableDataStyles }} >When Complete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{backgroundColor: '#FAF9FA', ...tableDataStyles}} component="th" scope="row">{row.name}</TableCell>
              <TableCell sx={{backgroundColor: '#FAF9FA', ...tableDataStyles}} align="right">{row.calories}</TableCell>
              <TableCell sx={{backgroundColor: '#FAF9FA', ...tableDataStyles}} align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}