import { Button } from "antd"
import "@/styles/ButtonOutline.css"



export const ButtonOutline = ({children}) => {
    return(
    <Button className="buttonOutline" type="primary" ghost>
        {children}
    </Button>
    )
}

export default ButtonOutline