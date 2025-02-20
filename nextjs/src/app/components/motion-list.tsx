import * as motion from "motion/react-client"

const List = ["Cucumber", "Ginger", "Chicken", "Tofu", "Hand Soap", "Fish"]

export default function MotionList(){
    return(
        <div>
            <h1 className="font-bold">Framer Motion List</h1>
            <div>
                {List.map((name, index) => (
                    <Item key={name} name={name} />
                ))}
            </div>
        </div>
    )
}

function Item({name}: {name: string}){
    return (<motion.div drag='y' className="border border-gray-500 rounded-full bg-cyan-500 flex justify-center">{name}</motion.div>)
}