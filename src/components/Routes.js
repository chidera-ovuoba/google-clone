import React, { useState,useEffect} from 'react'

const Routes = () => {
  const [query, setQuery] = useState('');
  const [clicked, setClicked] = useState(false);
  const [dataSearch, setDataSearch] = useState('search');
  const [data, setData] = useState([]);
  const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'US',
		'X-RapidAPI-Key': '63a673aa5emsh9645f106902d5fep17b130jsnb53f8784fe04',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
	}
};

  useEffect(() => {
    if (query) {
      fetch(`https://google-search3.p.rapidapi.com/api/v1/${dataSearch}/q=${query.split(' ').join('+')}&num=50`, options)
        .then(response => response.json())
        .then(response => {
          setData(response.image_results)
         console.log(response.image_results)
        })
        .catch(err => console.error(err));
    }
  }, [clicked,dataSearch])

  
  return (
    <div>
      <div className="flex gap-4 m-3 p-6">
        <button className='p-2 text-center text-white bg-zinc-400' onClick={() => setDataSearch('search')}>All</button>
        <button className='p-2 text-center text-white bg-zinc-400' onClick={() => setDataSearch('image')}>Images</button>
        <button className='p-2 text-center text-white bg-zinc-400' onClick={() => setDataSearch('news')}>News</button>
         <button className='p-2 text-center text-white bg-zinc-400' onClick={()=>setDataSearch('video')}>Video</button>
      </div>
      <input className='m-6 p-7 bg-slate-500 text-white' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={()=>setClicked((prev)=>!prev)}>enter</button>
       {}
      { /*<div className='flex justify-center'>
      <div className="grid grid-cols-2 gap-x-28 gap-y-10 place-items-center mt-20 ml-20 w-[75vw] ">
        {
          data.map((item, i) => {
            const { description, link, title, cite: { domain } } = item;
            
              const textLink = link;
              const index = textLink.indexOf('?');
              let newLink = textLink.slice(0, index);
            
              return <div key={i} className='grid gap-2 place-self-start'>
                <a href={link} className='text-gray-400 text-sm' target='_blank'>{domain ||newLink}</a>
                <a href={link} target='_blank' className='text-xl text-purple-400 break-words'>{title && title}</a>
                <p className='text-lg leading-4 tracking-wider text-gray-600'>{description && description}</p>
              </div>
          })
      }
      </div>
    </div>*/}
      <div className='flex flex-wrap gap-4'>
        {data?.map((item, i) => {
          const { image: { src }, link: { domain, title, href } } = item;
          return <div className='w-[13rem] max-w-[16rem] h-[12rem] border-stone-700 border-solid border-2 rounded-2xl' key={i}>
            <div className='w-full h-full flex object-contain'>
            <img src={src} alt="" className='w-full h-full object-cover self-end rounded-2xl' />
            </div>
              <div className='p-1 leading-3'>
              <p className='text-[10px]'>{title}</p>
              <small className='text-[6px]'><a href={href}>{domain}</a></small>
            </div>
          </div>
      })}
      </div>
      
      </div>
  )
}

export default Routes