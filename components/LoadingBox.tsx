//import Link from 'next/link';
//import Head from 'next/head';
import React from 'react'

//
export default function LoadingBox(){
  return (
    <div className="text-center bg-light">
      <span className="mb-2 text-success">Loading...</span>
      <div className="spinner-border spinner-border-sm text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>     
  );
}
