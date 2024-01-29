import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  MoreVertRounded,
} from '@mui/icons-material'
import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertRounded fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={4} />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$65545</p>
        <p className='desc'>
          Empower Your Finances, Anytime, Anywhere: Your Ultimate Wallet App for Seamless
           Transactions and Financial Freedom.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpRounded fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownRounded fontSize='small' />
              <div className='resultAmount'>$65.8k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownRounded fontSize='small' />
              <div className='resultAmount'>$167.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
