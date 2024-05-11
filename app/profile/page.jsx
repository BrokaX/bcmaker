'use client'
import React from 'react';
import {useAuthContext} from '@/actions/AuthProvider';
import { RedirectType } from 'next/navigation';

const profilePage = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <RedirectType type='push' href='/' />;
  }
  return 
  (
  <div>{user.email}</div>
 <div>{user.email}</div>)
  ;
};

export default profilePage;