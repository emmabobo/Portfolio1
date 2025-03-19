import React ,{ useEffect, useRef}from 'react'



const RevealOnScroll = ({childeren}) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('visible')
                }
            },{threshold: 0.5, rootMargin: '0px 0px -100px 0px'})
        })
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();

    });

  return (
    <div ref={ref} className='reveal'>
        {childeren}
      
    </div>
  )
}

export default RevealOnScroll
