
import { Button } from "antd"
import '@/styles/Download.css'

const ButtonPrimary = ({children}) => {

    return(
        <>
         <Button className="download-button" type="primary">{children}</Button>
        </>
    )
}

export default ButtonPrimary