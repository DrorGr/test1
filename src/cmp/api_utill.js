export let data1;


async function get() {
await fetch(`https://cloudwize-public.s3.us-east-2.amazonaws.com/interview/data-2FTFt8ZcCKeN_g6ffr-ib.json`)
  .then(res => res.json())
  .then(obj => data1 = obj)
  .then(() => console.log(data1))
  .catch(err => console.log("somesite:", err));
}


get()

