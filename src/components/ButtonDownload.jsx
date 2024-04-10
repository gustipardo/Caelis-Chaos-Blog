import { Button } from "antd";
import '@/styles/Download.css';
import '@/styles/global.css';


const ButtonDownload = ({ children, file }) => {

    return (
        <>
            <Button className="download-button" type="primary">
                <a href={`/downloads/${file}`} download>{children}</a>
            </Button>
        </>
    );
};

export default ButtonDownload;
