const getData = async (filename) => {
  try {
    const res = await fetch(`./db/${filename}.json`);
    const json = await res.json();
    
    return json;
  }
  catch (e) {
    console.log(e);
  }
};


export const fillDB = async (dbName, filename, callback) => {
  const data = await getData(filename);
  if (!data) return [];

  data.forEach(item => dbName.push(item));

  callback(dbName);
  console.log(`${filename}: `, dbName);
};

