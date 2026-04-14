/* version simple javascript */

export const sendDataMail = (dataObject, url) => {
  // console.log(dataObject);

  const searchParams = new URLSearchParams();

  for (const key in dataObject) {
    searchParams.append(key, dataObject[key]);
  }

  // console.log("searchParams", searchParams);

  const onFire = fetch(url, {
    method: "POST",
    mode: "no-cors", // Bypasses CORS; data is sent, but response is hidden
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams.toString(),
  })
    .then((res) => res)
    .catch((err) => console.error("error POST Failed in Fetch:", err));

  setTimeout(async () => {
    const cooked = await onFire;

    // console.log("result POST:", cooked);

    console.log("post Sent!");
  }, 3000);
};

/* version using typescript */

/* type MailsInfo = {
  name: string
  message: string
  email: string
}

export const getInfosMail = (url: string): void => {
  console.log('url:', url)
  const newUrl = url + '?id=100&name=Gerard'

  const result = fetch(newUrl)
    .then((res) => res.json())
    .then((resp) => resp)
    .catch((err) => console.log('error GET Fetch:', err))

  setTimeout(async (): Promise<void> => {
    const endResult = await result
    console.log('result:', endResult)
  }, 3000)
}

export const sendDataMail = (data: MailsInfo, url: string): void => {
  console.log(data)
  const onFire = fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((resp) => resp)
    .catch((err) => console.log('error POST Fetch:', err))

  setTimeout(async (): Promise<void> => {
    const cooked = await onFire
    console.log('result POST:', cooked)
  }, 3000)
} */
