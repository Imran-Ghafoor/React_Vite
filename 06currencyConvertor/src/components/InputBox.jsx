import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChnage,
  onCurrencyChnage,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disable={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChnage && onAmountChnage(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChnage && onAmountChnage(e.target.value)}
          disable={currencyDisable}
        >
          {currencyOptions.map((Currency) => (
            <option key={Currency} value={Currency}>
              {Currency}
              usd
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
