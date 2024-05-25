export const getReceiver = (participants, senderId) => {
  return participants.filter(user => user._id !== senderId)[0];
}
