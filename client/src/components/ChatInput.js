import React, { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ user, clickedUser, getUserMessages, getClickedUsersMessages }) => {
    const [textArea, setTextArea] = useState("");
    const [selectedEmoji, setSelectedEmoji] = useState("");
    const userId = user?.user_id;
    const clickedUserId = clickedUser?.user_id;

    const emojiList = ['😀', '😊', '👍', '❤️', '🎉', '🙌', '😎', '🌈', '🔥', '💖'];

    const addEmojiToMessage = (emoji) => {
        setTextArea(textArea + emoji);
    };

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        };

        try {
            await axios.post('http://localhost:8000/message', { message });
            getUserMessages();
            getClickedUsersMessages();
            setTextArea("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} />
            <div className="emoji-list">
                {emojiList.map((emoji, index) => (
                    <span
                        key={index}
                        className="emoji"
                        onClick={() => addEmojiToMessage(emoji)}
                    >
                        {emoji}
                    </span>
                ))}
            </div>
            <button className="secondary-button" onClick={addMessage}>Submit</button>
        </div>
    );
};

export default ChatInput;
