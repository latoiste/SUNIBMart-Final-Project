import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputField from "./InputField";

function PaymentPanel() {
    const [disableButton, setDisableButton] = useState(true);
    const [shipping, setShipping] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    useEffect(() => {
        (shipping && paymentMethod) ? setDisableButton(false) : setDisableButton(true);
    }, [shipping, paymentMethod]);

    return (
        <div className="p-3 w-1/4 space-y-4 border-2 rounded-s-2xl border-gray-100">
            <p className="font-bold text-3xl text-yellow-500">Checkout</p>
            <p className="text-2xl font-semibold">Shipping Address</p>
            <InputField query={shipping} setQuery={setShipping} placeholder="Shipping Address"/>
            <p className="text-2xl font-semibold">Payment Method</p>
            <div className="flex flex-col justify-between space-y-2">
                <div className="flex space-x-2 items-center">
                    <input onChange={(p) => setPaymentMethod(p.target.value)} type="radio" name="payment" value="bca"/>
                    <img className="w-10 h-auto" src="/bca-logo.png" alt="" />
                    <p className="font-semibold">BCA Virtual Account</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <input onChange={(p) => setPaymentMethod(p.target.value)} type="radio" name="payment" value="visa"/>
                    <img className="w-10 h-auto" src="/visa-logo.png" alt="" />
                    <p className="font-semibold">VISA</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <input onChange={(p) => setPaymentMethod(p.target.value)} type="radio" name="payment" value="mastercard"/>
                    <img className="w-10 h-auto" src="/mastercard-logo.png" alt="" />
                    <p className="font-semibold">Mastercard</p>
                </div>
            </div>
            <button disabled={disableButton} className={`btn-filled ${disableButton ? "btn-filled--gray" : ""}`}>Proceed Checkout</button>
        </div>
    )
}
export default PaymentPanel;