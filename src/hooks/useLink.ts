import React from 'react';

 const useLink = () => {
  const initialformValue = Object.freeze({
    url: "",
  });
  const [formValue, updateformValue]: any = React.useState(initialformValue);
  const [resultado, setResultado] = React.useState<string | null>(null);

  const handleChange = (event: any) => {
    updateformValue({
      ...formValue,
      [event.target?.name]: event.target.value.trim()
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "x-apikey": ""+process.env.NEXT_PUBLIC_API_KEY
      //""+process.env.NEXT_PUBLIC_API_KEY to avoid string error
    }
  
    let bodyContent = new FormData();
    bodyContent.append("url", formValue.url);
  
    let response = await fetch('https://www.virustotal.com/api/v3/urls?url='+formValue.url+'', {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
  
    let data = await response.text();
    let object = JSON.parse(data);
    let link = object.data.links.self;
    
    let headersList2 = {
      "Accept": "*/*",
      "User-Agent": "VirusTotalAPI",
      "x-apikey": ""+process.env.NEXT_PUBLIC_API_KEY
     }
     
     let response2 = await fetch(link, { 
       method: "GET",
       headers: headersList2
     });
     
     let data2 = await response2.text();
     setResultado(data2);
  };
  
  return { formValue, resultado, handleChange, handleSubmit };
}

export {useLink};