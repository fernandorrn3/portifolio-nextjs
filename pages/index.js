import { useSession } from "next-auth/react"
import Layout from "../components/layount/layout"
import LayountDynamic from "../components/layountP/layountDynamic"
export default function Home() {

  const { data: session, status } = useSession()

  const enviarVideo = async (e) => {


    /*async function uploadVideoChunks(file, url, chunkSize) {
      const totalSize = file.size;
      let startByte = 0;
      let endByte = chunkSize - 1;

      while (startByte < totalSize) {
        const chunk = await readChunk(file, startByte, endByte);
        const transforma = new Uint8Array(chunk) 
        await uploadVideoChunk(transforma, url, startByte, endByte, totalSize);
        startByte = endByte + 1;
        endByte = Math.min(startByte + chunkSize - 1, totalSize - 1);
      }
    }

    function readChunk(file, startByte, endByte) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const blob = file.slice(startByte, endByte + 1);

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(blob);
      });
    }

    async function uploadVideoChunk(chunk, url, startByte, endByte, totalSize) {
      const headers = {
        'Content-Type': 'video/mp4',
        'Content-Range': `bytes ${startByte}-${endByte}/${totalSize}`,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: chunk,
      });

      if (!response.ok) {
        throw new Error('Failed to upload chunk');
      }
      const res = await response.json()
    console.log(res)
    }
    const chunkSize = 1024 * 1024;
    await uploadVideoChunks(e.target.files[0], process.env.NEXT_PUBLIC_DB_HOST + 'sendVideo/sendVideo', chunkSize)
*/

    const chunkSize = 1024 * 1024;
    const cortaVideo = async (videoFile, chunkSize) => {
      const chunks = []
      let start = 0

      while (start < videoFile.size) {
        const end = Math.min(start + chunkSize, videoFile.size);
        const chunk = await videoFile.slice(start, end).arrayBuffer()
        const fileReader = new FileReader();
        chunks.push(new Uint8Array(chunk))
        start = end

      }

      return chunks
    }


    const corta = await cortaVideo(e.target.files[0], chunkSize)
    console.log(corta[0])
 


      /*const stream = new ReadableStream({
        start(controller) {
         // video.forEach(chunk => controller.enqueue(chunk))
          controller.enqueue('corta[0]')
          controller.close()
        }
      }).pipeThrough(new TextEncoderStream());
      const response = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'sendVideo/sendVideo', {
        method: 'POST',
        headers: {
          'Content-type': 'text/plain'
        },
        body: stream,
        duplex: 'half',

      })
      const res = await response.json()
    console.log(res)*/



    function wait(milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    
    const stream = new ReadableStream({
      async start(controller) {
        await wait(1000);
        controller.enqueue('This ');
        await wait(1000);
        controller.enqueue('is ');
        await wait(1000);
        controller.enqueue('a ');
        await wait(1000);
        controller.enqueue('slow ');
        await wait(1000);
        controller.enqueue('request.');
        controller.close();
      },
    }).pipeThrough(new TextEncoderStream());
    
   fetch(process.env.NEXT_PUBLIC_DB_HOST + 'sendVideo/sendVideo', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: stream,
      duplex: 'half',
    });

   

  }

  const testando = () => {
    const supportsRequestStreams = (() => {
      let duplexAccessed = false;
      
      const hasContentType = new Request('', {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          duplexAccessed = true;
          return 'half';
        },
      }).headers.has('Content-Type');
      
      console.log({ duplexAccessed, hasContentType });
      
      return duplexAccessed && !hasContentType;
    })();
  
    if (!supportsRequestStreams) {
      output.textContent = `It doesn't look like your browser supports request streams.`;
      return;
    }
  }

  return (
    <div className="flex flex-col">
      <h1>ola mundo</h1>
      <input type="file" onChange={enviarVideo} />
      <button onClick={testando}>testaae</button>

    </div>
  )
}

Home.getLayout = function (page) {
  const x = 1
  if (x == 1) {
    return (
      <LayountDynamic>
        {page}
      </LayountDynamic>
    )
  }
  return (
    <Layout>
      {page}
    </Layout>
  )
}











