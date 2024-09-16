import { useEffect, useRef } from "react"

const FullGame = props => {
    const ref = useRef();

    const draw = (context, unitPos) => {
        context.translate(0, 0)
        context.fillStyle = "grey"
        context.fillRect(
            (unitPos["pos_x_center"] - (unitPos["width"] / 2)),
            (unitPos["pos_y_center"] - (unitPos["height"] / 2)),
            (unitPos["width"]),
            (unitPos["height"]),
            )
        console.log("translating")
        context.translate(
            unitPos["pos_x_center"],
            unitPos["pos_y_center"]
        )
        console.log("rotating")
        context.rotate(
            (unitPos["rotation"] * Math.PI) / 180
        )
        console.log("rotating_back")
        context.translate(
            -(unitPos["pos_x_center"]),
            -(unitPos["pos_y_center"])
        )
    }    
    
    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext('2d')

        const unitPos = {
            "pos_x_center": 200,
            "pos_y_center": 200,
            "rotation": 60,
            "width":100,
            "height":60
        }

        draw(context, unitPos)
    }, [])

    
    return <canvas ref={ ref } {...props} />

}


export default FullGame