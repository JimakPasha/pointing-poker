import React, { useState, useEffect, useContext, useRef } from 'react';
import { Box, Divider, Grid, IconButton, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './Chat.scss';
import { SocketContext } from '../../socketContext';
import { MemberCard } from '../MemberCard/MemberCard';
import { Message } from '../../models/Message';

export function Chat(): JSX.Element {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [user] = useState({ name: 'John Doe', position: 'Frontend developer' });
  const socket = useContext(SocketContext);
  const scrollRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    socket.on('message', ({ text, id }: Message) => {
      setMessages((chatMessages) => [...chatMessages, { text, id }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView(true);
    }
  }, [messages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <Grid className="chat" container direction="column" wrap="nowrap">
      <List className="chat__message-list">
        {messages.map((chatMessage, index) => (
          <ListItem ref={index === messages.length - 1 ? scrollRef : null} key={chatMessage.id}>
            <Grid container wrap="nowrap">
              <Grid className="chat__message-wrapper" item xs="auto">
                <ListItemText className="chat__message" primary={chatMessage.text} />
              </Grid>
              <Grid item xs="auto">
                <MemberCard name={user.name} position={user.position} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Box display="flex">
          <TextField
            className="chat__field"
            name="message"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={message}
            label="Message"
            autoComplete="off"
          />
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Box>
      </form>
    </Grid>
  );
}