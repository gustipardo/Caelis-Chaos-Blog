import { Button } from "antd";
import '@/styles/Download.css';
import '@/styles/global.css';
import downloadFile from "@/services/downloadFile";


const ButtonDownload = ({ children, file }) => {


    return (
        <>
            <Button className="download-button" type="primary" onClick={() => {downloadFile(file)}}>
                {children}
            </Button>
        </>
    );
};

export default ButtonDownload;
