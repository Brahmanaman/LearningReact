# useContect Hook

jab hame parent component se kisi nth child component tak prop bhejna hota hai, to hme sara component ko props pass karna pdta hai, phir chaey usko us props ki jrurt ho ya na ho, iss problem ko hum bolte hai prop drilling

Prop Drilling se bachne k liye hmare pass ekk hook hai jiska name hai useContext, ye direct parent component se child component tak data pochata hai bina kisi middle component ko pass kare.Isme 2 cheeje hoti hai

1. CreateContext : vha use krte hai jha se data bhejna hai
2. Provider: props/data ko source se lekr destination tk pochane ka kaam krta hai
3. UseContext : vha use krte hai jha props/data accept krna hota hai
