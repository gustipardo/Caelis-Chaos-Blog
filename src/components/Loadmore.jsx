import { Button } from "antd"
import "@/styles/ButtonOutline.css"
import getCurrentPost from "@/services/getCurrentPost"


export const LoadMore = ({children}) => {
    return(
    <a href="">
    <Button className="buttonOutline" type="primary" ghost>
        {children}
    </Button>
    </a>
    )
}

export default LoadMore