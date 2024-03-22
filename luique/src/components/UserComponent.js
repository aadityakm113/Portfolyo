import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slices/data';

const UserComponent = () => {
  const dispatch = useDispatch();
  const { data,loading,error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
    console.log("dispatch",data) 
  }, [dispatch]);
  return (
    <div>
      <h1>Data:</h1>
      {data && (
        <ul>
          {/* Render data items */}
          {data}
        </ul>
      )}
    </div>
  );
}

export default UserComponent;

