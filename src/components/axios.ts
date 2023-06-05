import axios from "axios";
async function req(param: any,) {
    // event.preventDefault();
    let headersList = {
        "Accept": "*/*",
        "x-apikey": `${process.env.API_KEY}`
    }

    let bodyContent = new FormData();
    bodyContent.append("url", "https://secure.eicar.org/eicar.com");

    let response = await fetch("https://www.virustotal.com/api/v3/urls?url=https%3A%2F%2Fsecure.eicar.org%2Feicar.com", {
        method: "POST",
        body: bodyContent,
        headers: headersList
    });

    let data = await response.text();
    console.log(data);
}
export { req };



