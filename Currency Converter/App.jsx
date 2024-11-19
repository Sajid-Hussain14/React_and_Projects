import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/currencyInfo'

import './App.css'
import './index.css'

function App() {
    const  [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState("usd")
    const [toCurrency, setToCurrency] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const fromCurrencyInfo = useCurrencyInfo(fromCurrency)
    const options = Object.keys(fromCurrencyInfo)

    const swap = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

   const convert= () => { setConvertedAmount((amount * fromCurrencyInfo[toCurrency]) / fromCurrencyInfo[fromCurrency])}
   return (
    <div
        className="bg-cover color-black h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                    <InputBox
                        className="your-custom-class-name"
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyTypeChange={(currency) => setAmount(amount)}
                        selectCurrency={fromCurrency}
                        onAmountChange={(amount) => setAmount(amount)}
                    />

                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyTypeChange={(currency) => setToCurrency(currency)}
                            selectCurrency={fromCurrency}
                            amountDisabled
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
