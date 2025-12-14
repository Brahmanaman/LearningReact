UseEffect hmara side effect ko handle karne mai kaam ata hai, matlab jab hmara prop ya state change hota hai to pura component re-render hota hai, or component k andr jo bhi function hoga vo pura chlega.

Hum nhi chyate hai hai, jis function ki jrurt re-render hone ki hum use UseEffect hook m rkhte hai or ye ekkk dependency array leta hai.Dependecy array k bases m function chlta hai

Agr hum dependency array nhi denge to, bar bar chlega

UseEffect(()=>{
..... our code
},[dependency])

React me “side effect” ka matlab hota hai:
👉 component ke render ke alawa koi extra kaam jo bahar impact kare.

🔹 Side Effect kya hota hai?
# React ka rule:
# Render = sirf UI banana (pure function)

1. Jo cheezein UI ke bahar ka kaam karti hain, unhe side effect kehte hain, jaise:
2. API call
3. state update
4. DOM manipulation
5. console.log
6. timers (setTimeout, setInterval)
7. localStorage access
8. In sab ko hum useEffect me rakhte hain.


🔸 State Side Effect kya hota hai?
# Jab state change hone ke baad koi extra kaam karna ho → State Side Effect

🔸 Prop Side Effect kya hota hai?
# Jab parent se aane wale props change hone par koi kaam karna ho → Prop Side Effect