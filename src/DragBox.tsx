import { motion } from "motion/react"

export default function DragBox() {
    return <motion.div drag style={box} />
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#1612ec",
    borderRadius: 30,
    cursor: "grab",
}
