import { useState } from 'react'
import { UniversalCom } from './components/universalBtns'
import { Bug } from 'lucide-react'
import { Mainbar } from './components/mainbar/mainbar'
import { Sidebar } from './components/sidebar/sidebar'
import { twMerge } from 'tailwind-merge'

function App() {
  const [panel, setpanel] = useState(false)

  return (
    <>
      <div className={`grid h-dvh animationOne  ${panel ? 'lg:grid-cols-[min(12.25rem,60vw)_1fr] ' : ' lg:grid-cols-[3.125rem_1fr]'} grid-rows-[4rem_1fr] grid-cols-[3.125rem_1fr]`}>
        <div className='relative row-span-2  z-20 bg-default animationOne'>
          <div className={twMerge('border borderRight flex flex-col  absolute inset-y-0 left-0 bg-default animationOne', panel ? 'w-[min(12.25rem,70vw)]' : 'w-full',
      'lg:w-full')}>
            <Sidebar panel={panel} setpanel={setpanel}  />
          </div>
        </div>
        {panel && (
          <div className="fixed inset-0 z-10 bg-black/40 lg:hidden" onClick={() => setpanel(false)} />
        )} 
        
        <div className='border borderBottom centered lg:col-start-2'>
          <UniversalCom icon={<Bug />} clicked={() => console.log("work")}/>
        </div>
        <div className={twMerge(`flex  mt-3 lg:col-start-2 animationOne ${panel ? 'justify-center' : 'justify-start pl-4'}`)}>
          <Mainbar />
        </div>
      </div>
    </>
  )
}

export default App
