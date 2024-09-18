import { useEffect, useRef } from "react"

const FullGame = props => {
    const ref = useRef();

    const drawUnit = (context, unit) => {
        const unitPos = unit.unitPos

        context.save()
        context.fillStyle = "grey"
        
        context.translate(
            unitPos["pos_x_center"],
            unitPos["pos_y_center"]
        )

        context.rotate(
            (unitPos["rotation"] * Math.PI) / 180
        )
        
        context.fillRect(
            -(unitPos["width"] / 2),
            -(unitPos["height"] / 2),
            (unitPos["width"]),
            (unitPos["height"]),
            )

        context.restore()
    }

    const draw = (context, p1AllUnits) => {
        /* blank background */
        context.fillStyle = "white"
        context.fillRect(0, 0, 3000, 2000)
        context.clearRect(0, 0, 3000, 2000)


        /* gameboard */
        context.fillStyle = "Green"
        context.fillRect(300, 20, 1828, 1219)

        for (var i = 0;i < p1AllUnits.length;i++) {
            drawUnit(context, p1AllUnits[i])
        }
    }    
    
    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext('2d')

        const unitPos = {
            "pos_x_center": 100,
            "pos_y_center": 100,
            "rotation": 60,
            "width":100,
            "height":60
        }
        const unitPos2 = {
            "pos_x_center": 300,
            "pos_y_center": 100,
            "rotation": 200,
            "width": 140,
            "height": 40,
        }


        const unit = {
            "unitInfo": "info",
            "unitPos": unitPos
        }

        const unit2 = {
            "unitInfo": "info2",
            "unitPos": unitPos2
        }

        const p1AllUnits = [
            unit,
            unit2
        ]


        draw(context, p1AllUnits)
    }, [])

    
    return <canvas ref={ ref } {...props} />

}


export default FullGame