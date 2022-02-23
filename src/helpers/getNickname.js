export const getNickname = (nick, mail) => {
  if (!nick) return mail.split('@')[0];
  return nick;
};
