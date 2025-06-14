import { useState } from "react";
import InputField from "./InputField";
import { useRouter } from "next/navigation";

function PaymentPanel() {
    const [shipping, setShipping] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const router = useRouter();
    const disableButton = !(shipping && paymentMethod);

    return (
        <div className="p-3 w-1/4 h-fit space-y-4 border-2 rounded-s-2xl border-gray-100 dark:border-neutral-800">
            <p className="font-bold text-3xl text-yellow-500">Checkout</p>
            <p className="text-2xl font-semibold">Shipping Address</p>
            <InputField query={shipping} setQuery={setShipping} placeholder="Shipping Address"/>
            <p className="text-2xl font-semibold">Payment Method</p>
            <div className="flex flex-col justify-between space-y-2">
                <div className="flex space-x-2 items-center">
                    <input onChange={(p) => setPaymentMethod(p.target.value)} id="bca" type="radio" name="payment" value="bca"/>
                    <img className="w-10 h-auto" src="/bca-logo.png" alt="" />
                    <label htmlFor="bca" className="font-semibold">BCA Virtual Account</label>
                </div>
                <div className="flex space-x-2 items-center">
                    <input onChange={(p) => setPaymentMethod(p.target.value)} id="visa" type="radio" name="payment" value="visa"/>
                    <img className="w-10 h-auto" src="/visa-logo.png" alt="" />
                    <label htmlFor="visa" className="font-semibold">VISA</label>
                </div>
                <div className="flex space-x-2 items-center">
                    <input onChange={(p) => setPaymentMethod(p.target.value)} id="mastercard" type="radio" name="payment" value="mastercard"/>
                    <img className="w-10 h-auto" src="/mastercard-logo.png" alt="" />
                    <label htmlFor="mastercard" className="font-semibold">Mastercard</label>
                </div>
            </div>
            <button disabled={disableButton} onClick={() => router.push("/")} className={`btn-filled ${disableButton ? "btn-filled--gray" : ""}`}>Proceed Checkout</button>
        </div>
    )
}
export default PaymentPanel;