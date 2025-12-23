# Derived State

ekk asie state jo kisi aur state ya props se calculate ho rhi ho

Example:

<!-- issme ye galti hai total price state se calculate kar sakte hai, use ekk new state mai rakh ke hum memory ka galt use kr rhe hai  -->

const [price, setPrice] = useState(100);
const [qty, setQty] = useState(2);
const [total, setTotal] = useState(200); // ❌ derived

useEffect(() => {
setTotal(price \* qty);
}, [price, qty]);

<!-- issme humne totalPrice ko state se calucalte karke derived state mai rkh rhe hai, no memory leakage -->

const [price, setPrice] = useState(100);
const [qty, setQty] = useState(2);

const total = price \* qty; // ✅ derived value
