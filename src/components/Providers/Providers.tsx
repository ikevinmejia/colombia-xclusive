'use client'

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Providers = ({children}:Props) => {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}

export default Providers