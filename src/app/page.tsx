'use client'
import RootLayout from './layout';
import { TheHead } from '../components/headf';
import React from 'react';
//var $ = require("jquery");



export default function Home() {

  const initialFormData = Object.freeze({
    url: "www.google.com",

  });

  const [formData, updateFormData]: any = React.useState(initialFormData);
  const handleChange = (e: any) => {

    updateFormData({
      ...formData,

      // Trimming any whitespace

      [e.target?.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something

    alert(JSON.stringify(formData.url, null, 4));
  };
  const objeto = {
    data: 1,
    dato: ''
  }
  return (
    <>
      {/* <TheHead /> */}

      <RootLayout>
        <form>
          <input type="text" name="url" placeholder="www.google.com" value="www.google.com" onChange={handleChange} />
          <input type="submit" onClick={handleSubmit} />
        </form>

      </RootLayout>

    </>

  )
}
