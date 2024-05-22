import { useResponseStore } from "@/store/Respose"

export const ResponseReply = ({response_id, content, username}) => {
    const setResponseId = useResponseStore((state) => state.setResponseId)
    const setContent = useResponseStore((state) => state.setContent)
    const setUsername = useResponseStore((state) => state.setUsername)

    const handleClick = () => {
        setResponseId(response_id.toString())
        setContent(content)
        setUsername(username)
    }
    return (
        <button onClick={() => handleClick()}>Reply</button>
    )
}