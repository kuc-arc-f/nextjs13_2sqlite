import Layout from '@/components/layout'
import useSWR from 'swr'
//import Head from 'next/head'

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())
//
export default function Page() {
  const { data, error } = useSWR('/api/hello', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
console.log(data);
  //
  const testInit = async function () {
    //@ts-ignore
    initSqlJs({locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}`}).then(SQL => {
      const db = new SQL.Database();
      let res = JSON.stringify(db.exec("SELECT sqlite_version();"));
      console.log(res)
    });
  }
  testInit();
  //
  return (
    <Layout>
      <>
        <h3>test4.tsx</h3>
        <hr />
      </>    
    </Layout>
  )
}