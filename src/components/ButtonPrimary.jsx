
import { Button } from "antd"
import '@/styles/Download.css'
import '@/styles/global.css'

const ButtonPrimary = ({children}) => {

    return(
        <>
         <Button className="download-button" type="primary">{children}</Button>
        </>
    )
}

export default ButtonPrimary