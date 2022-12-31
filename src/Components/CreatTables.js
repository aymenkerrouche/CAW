import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, phone, email) {
  return { name, phone, email};
}

const rows = [
  createData('Aymen Kerrouche', '0798121607', 'aymenkerrouche00@gmail.com'),
  createData('Aya bouhelais', '0551258237', 'aymenkerrouche00@gmail.com'),
];

function CreatTables() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell >Phone number</TableCell>
            <TableCell >email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell >{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default CreatTables;
export const row = rows;
export const createdata = createData;