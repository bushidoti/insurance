import { XMarkIcon } from '@heroicons/react/20/solid'
import {useState} from "react";

export default function Banner() {
  const [close,setClose] = useState<boolean>(false)

  return (
    <div className={`flex ${close ? 'hidden' : ''} items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1`}>
      <p className="text-sm leading-6 text-white">
        <a href="#" className='hover:text-green-500'>
          <strong className="font-semibold">تخفیف</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          به مناسبت عید 15 درصد تخفیف روی بیمه بدنه و ثالث لحاظ شده است.&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={() => setClose(true)} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
