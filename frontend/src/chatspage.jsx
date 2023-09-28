import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
//multichat socket, lets users connect to all the chats they have
//multichatwindow UI that lets the USER type and see new messages
//multichatlogic, api calls, makes the chat app work
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'c7a00205-dc21-4286-b935-ee222c303e91',
        props.user.username,
        props.user.secret
    )
    return(
         <div style = {{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style = {{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage;