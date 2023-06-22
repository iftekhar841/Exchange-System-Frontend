import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ExchangeTable = (props) => {
  const { exchangeRate, exchangeIcon } = props

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>EXCHANGES</TableCell>
            <TableCell align="right">24H TRADE VOLUM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchangeIcon.map((icon, index) => (
            <TableRow key={index}>
              <TableCell>
                <p className='table-number'>{index + 1}</p>
                <img src={icon.url} alt="icon" />
                <p className='table-rate'>{exchangeRate[index].name}</p>
              </TableCell>
              <TableCell align='right'>
                <p className='table-volumn'>
                  $ {((exchangeRate[index].volume_1hrs_usd / 1000000000).toFixed(2))} billion
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExchangeTable;
