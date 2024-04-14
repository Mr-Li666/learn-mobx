import React from 'react';
import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <div className="Root flex">
      <Outlet />
    </div>
  );
}
