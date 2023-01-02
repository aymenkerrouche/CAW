import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Like from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function createData(subject, description, date, likes) {
  return { subject, description, date, likes};
}

const rows = [
  createData('Mondial', 'Qatar 2022 is best mondial ever', '22-12-2022', 0),
];


function CreatTables() {
  const [likes, setLikes] = React.useState(0);
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.subject}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.likes} 
                <IconButton 
                  color="secondary" 
                  aria-label="add an alarm"
                  onClick={()=>setLikes(row.likes++)}
                  >
                    <Like />
                </IconButton>
              </TableCell>
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