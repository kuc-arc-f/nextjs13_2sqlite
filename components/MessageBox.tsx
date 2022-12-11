import Link from 'next/link';
import Head from 'next/head';
//import flash from 'next-flash';
import React from 'react'

/*
interface IProps {
  messages_success: string,
  messages_error: string,
}
*/
//
export default function MessageBox(props: any) {
//console.log(props.success);
  return (
  <div>
        { props.success ? 
    <div className="alert alert-success" role="alert">{props.success}</div> 
    : <div /> 
    }
    { props.error ? 
    <div className="alert alert-danger" role="alert">{props.error}</div> 
    : <div /> } 
  </div>
  );
}
