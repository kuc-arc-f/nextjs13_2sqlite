  /**
  * test2
  * @param
  *
  */  
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout'

//const perPage = 100;
interface IProps {
//  items: Array<object>,
  history:string[],
}
interface IState {
}
//
export default class Page extends React.Component<IProps, IState> {
  static async getInitialProps() {
//console.log(items);
console.log("window=" ,typeof(window));
    if(typeof window !== 'undefined') {
console.log("window=YES");
      //@ts-ignore
      /*
      initSqlJs({locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}`
      }).then(SQL => {
        const db = new SQL.Database();
        let res = JSON.stringify(db.exec("SELECT sqlite_version();"));
        console.log(res)
      });
      */
    }

    return {
      items: [],
    }
  }
  constructor(props: any){
    super(props)
    this.state = {};
//console.log(props);   
  }
  async componentDidMount() {

  }   
  //
  render() {
    return(
      <Layout>
        <h3>Test2</h3>
      </Layout>
    )  
  } 
}