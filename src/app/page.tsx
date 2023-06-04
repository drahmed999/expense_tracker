import Image from 'next/image'
import CurrentBalance from './Components/Widgets/CurrentBalance'
import Heading from './Components/Widgets/Heading'
import Income from './Components/Widgets/Income'
import TransactionHistory from './Components/Widgets/TransactionHistory'
import Details from './Components/Widgets/Details'
import TransactionsData from './Components/Assets/TransactionsData'

import HeaderBottom from './Components/Shared/headerBottom'



export default function Home() {
  return ( <>
    <div className='max-w-md bg-red-100 border-2 border-red-900 shadow-2xl h-full p-2 flex justify-around my-2 mx-auto'>

<div className='flex-col'>
<TransactionsData>
  
<Heading/>
<CurrentBalance/>
<Income/>
<TransactionHistory/>
<Details/>
  </TransactionsData>  
<div></div>
<div></div>

</div>


    </div>
    <HeaderBottom/>
    </>
  )
}
