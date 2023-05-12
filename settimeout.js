function serverRequest() {
    // var promise = new Promise( (resolve, rejct) => {
    //     setTimeout(() => resolve('clairvoyant'), 3000)
    // })
    // return promise;
    try{
        setTimeout(() => {
       }, 3000);
       return "clairvoyant";
    }catch(error){
        console.log("error====",error);
    }
  }
  
  async function getCompany() {
    let companyPromise = serverRequest();
    let companyName = await companyPromise;
    console.log('companyName', companyName);
  }
  
  getCompany();