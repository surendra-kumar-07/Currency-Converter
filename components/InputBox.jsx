import React, {useId } from 'react'

const InputBox = ({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency="usd", amountDisable=false, currencyDisable=false, className=""}) => {

  const amountInputId = useId();
  return (
  <div className={`bg-cyan-600 p-3 rounded-lg text-sm flex text-white ${className}`}>
    <div className='w-1/2'>
      <label htmlFor={amountInputId} className='text-black mb-2 inline-block'>{label}</label>
      <input id={amountInputId} type="number"
      className='outline-none w-full bg-transparent py-1.5 border-b-2 border-gray-500'
      placeholder='Amount'
      disabled={amountDisable}
      value={amount}
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
      />
    </div>
    <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className='text-black mb-2 w-full'>Currency Type</p>
      <select className='rounded-lg p-1 bg-gray-100 cursor-pointer outline-none text-black'
      value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
      disabled={currencyDisable}>
        {currencyOptions.map((currency)=><option key={currency} value={currency}>{currency}</option>)}
       
      </select>
    </div>
  </div>
  )
}

export default InputBox


