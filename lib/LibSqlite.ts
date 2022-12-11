//
const LibSqlite = {
  db: null,
  /**
  * getDb: DBインスタンスを返す
  * @param
  *
  * @return
  */  
  getDb: async function(): Promise<any>
  {
    try{
      if(this.db !== null) {
        return this.db
      };
console.log("db=none");
      let sqlFilePath = "/cms.sqlite";
      //@ts-ignore
      const SQL = await initSqlJs({locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}`
      })   
      const dataPromise = await fetch(sqlFilePath).then(res => res.arrayBuffer());
      const u8array = new Uint8Array(dataPromise);
      this.db = new SQL.Database(new Uint8Array(u8array));
//      this.db = new SQL.Database(); 
      return this.db;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getDb');
    }   
  },
  /**
  * select: select実行
  * @param sql: string
  *
  * @return
  */ 
   select: async function(db: any, sql: string): Promise<any>
   {
     try{
      let ret = null;
      if(db === null) {
        return ret;
      };
      //@ts-ignore
      const res = db.exec(sql);
      if(res.length > 0) {
//        console.log(res[0]);
        ret = res[0].values;
      }
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , select');
    }   
  },
}
export default LibSqlite;
