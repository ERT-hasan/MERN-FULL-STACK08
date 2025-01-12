function getDataFromInternet(successCallback){
    console.log('getting data from internet');
    successCallback('kg coding');

}
getDataFromInternet((data) =>{


console.log(`data fetch is ${data}`);
});

    function getDataFromInternetUsingPromise(){
    let Promise = new Promise((resolve, reject) => {
        console.log('getting data from internet using promise');
        for(let i=0; i<10000;i++) console.log(i);
        resolve('kg coding');
    });
    return Promise;

}
getDataFromInternetUsingPromise()
.then((data) =>{
  console.log(`data is fetch${data}`);
});