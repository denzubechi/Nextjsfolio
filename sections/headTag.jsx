import {} from "react";
import Head from "next/head";

export default function HeadTag() {
  return (
    <Head>
      <title>Samuel Nzubechi</title>

      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/stan-1.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a192f" />
      {/* <!-- Windows Phone --> */}
      <meta name="msapplication-navbutton-color" content="#0a192f" />
      {/* <!-- iOS Safari --> */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0a192f" />

      <link rel="apple-touch-icon" href="%PUBLIC_URL%/profile.png" />

      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <link rel="icon" href="/profile.png" />

      <meta
        name="description"
        content={`Software Developer: Torche`}
      />
      <meta
        name="image"
        content={"/profile.png"}
      />
      <meta name="keywords" content="Chukwuma Samuel Nzubechi" />
      <link rel="shortcut icon" href="/profile.png"  style={{borderRadius:"50%"}}/>

      <meta property="og:title" content={`Chukwuma Samuel Nzubechi`} />
      <meta
        property="og:description"
        content={`Chukwuma Samuel's portfolio website`}
      />
      <meta
        property="og:image"
        content={"/profile.png"}
      />
      <meta property="og:url" content={`https://nzubechi.vercel.app/`} />
      <meta property="og:type" content="website" />

     
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
