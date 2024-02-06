import { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSendTransactions,
  reset,
} from '../../features/transactions/transactionSlice'
import './Transactions.scss'
import Loader from '../../components/Loader/Loader'
import { optionsDate, optionsTime, USDollar } from '../utils/helpOptions'

const Send = () => {
  const dispatch = useDispatch()

  const { send, isLoading, isSuccess, isError, message} = useSelector((state) => state.transact)

  useEffect(() => {
    return () => {
      dispatch(reset())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getSendTransactions())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell tableHead'>Send To</TableCell>
            <TableCell className='tableCell tableHead'>Date</TableCell>
            <TableCell className='tableCell tableHead'>Amount</TableCell>
            <TableCell className='tableCell tableHead'>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {send.map((transaction) => (
            <TableRow key={transaction._id}>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  {transaction.receiver.name}
                </div>
              </TableCell>
              <TableCell className='tableCell date'>
                {new Date(transaction.createdAt).toLocaleString(
                  'en-US',
                  optionsDate
                )}
                <div className='time'>
                  at{' '}
                  {new Date(transaction.createdAt).toLocaleString(
                    'en-US',
                    optionsTime
                  )}
                </div>
              </TableCell>


              <TableCell className='tableCell'>
                {USDollar.format(transaction.amount)}
              </TableCell>
              <TableCell className='tableCell'>
              {transaction.amount > 10000 ? 'Pending' : 'Success'}
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Send
