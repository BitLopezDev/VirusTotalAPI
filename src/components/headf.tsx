import React from 'react';
import Head from 'next/head';
import { globalMeta } from './globalmeta';



const TheHead = ({
    title = globalMeta.siteName,
    description = globalMeta.description,
    canonicalUrl = globalMeta.siteUrl,
    siteName = globalMeta.siteName,
    siteLogo = globalMeta.siteLogo,
    siteUrl = globalMeta.siteUrl,
    ogImgUrl = globalMeta.siteLogo,
    locale = globalMeta.locale,
    ...other
}

) => {
    return (
        <Head>

<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="Content-Type" content="text/html" />
            {/* <meta name="description" content="CV online de Santiago Comesaña" />  */}
            <meta name="keywords" content="Santiago Comesaña, CV Online, desarrollador" />
            <meta name="author" content="Santiago Comesaña López" />
            <meta name="robots" content="index, nofollow, noarchive" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta httpEquiv="expires" content="1000" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={siteUrl} />
            {/* <meta property="og:type" content={ogType} /> */}
            <meta property="og:image" content={siteLogo} />
            <link rel="shortcut icon" href="../static/favicon.ico"></link>
            <meta property="og:description" content={description} />
            <meta property="og:locale" content={locale} />
            <link rel="icon" type="image/x-icon" href={siteLogo}></link>

            {/*  */}

            {/*<
              />
    	 
    	
    	
    	 /> */}


        </Head>

    );

}

export { TheHead };