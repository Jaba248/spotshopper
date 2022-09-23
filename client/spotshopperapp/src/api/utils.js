const data = {
    url:"http://localhost:5000/api" // Url For API
}

const getApiUrl=(url)=>`${data.url}${url}`;

export const makeRequest=({url,absoluteUrl,method="post",onSuccess,onError,body})=>{
    fetch(absoluteUrl??getApiUrl(url),{method: method,body:body,
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(res => res.json())
      .then(res => onSuccess(res));
};
export const routes={
    login:getApiUrl("/login"),
    register:getApiUrl("/register")
}

export default data;