import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSelector, useDispatch } from 'react-redux';
import { sendMoney, reset } from '../../features/transactions/transactionSlice';
import Loader from '../Loader/Loader';

const Send = ({ setSendModalOpen }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.auth.user);
  const { isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.transact
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success('Transaction pending');
      setSendModalOpen(false);
    }
    dispatch(reset());
  }, [isError, message, isSuccess]);

  const [formData, setFormData] = useState({
    receiver: '',
    amount: '',
    remark: '',
  });

  const { receiver, amount, remark } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const transactionData = {
      receiver,
      amount,
      remark,
    };
    try {
      const result = await dispatch(sendMoney(transactionData));
      console.log(result); // Log the result here
    } catch (error) {
      // Handle errors
      console.error('Error sending money:', error);
    }
  };

  const sendModalClose = () => {
    setSendModalOpen(false);
  };

  return (
    <div className='sendmodal'>
      <div className='sendModalContainer'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className='sendModalHeader'>
              <h1>Send Money</h1>
              <div className='closeIconContainer' onClick={sendModalClose}>
                <CloseRoundedIcon className='closeIcon' />
              </div>
            </div>
            <div className='sendModalContent'>
              <section className='sendForm'>
                <form onSubmit={onSubmit}>
                  <div className='formControl'>
                    <label htmlFor='receiver'>Receiver ID</label>
                    <input
                      type='text'
                      name='receiver'
                      id='receiver'
                      value={receiver}
                      onChange={onChange}
                      placeholder='Enter Receiver ID'
                      required
                    />
                  </div>
                  <div className='formControl'>
                    <label htmlFor='amount'>Amount</label>
                    <input
                      type='text'
                      name='amount'
                      id='amount'
                      value={amount}
                      onChange={onChange}
                      min='1'
                      max='100000'
                      placeholder='Enter Amount'
                      required
                    />
                  </div>
                  <div className='formControl'>
                    <label htmlFor='remark'>Remark</label>
                    <input
                      type='text'
                      name='remark'
                      id='remark'
                      value={remark}
                      onChange={onChange}
                      placeholder='Enter Remark'
                      required
                    />
                  </div>
                  <button className='btn' type='submit'>
                    Send
                  </button>
                </form>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Send;
