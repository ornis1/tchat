export const user = {
  id: 1,
  first_name: 'Marat',
  last_name: 'Tukhtarov',
  username: '@ornis1'
}
export const chat = {
  id: 1,
  title: 'Group title',
  photo: 'https://web.telegram.org/img/placeholders/Fave.png'
}
export const message = {
  id: 1,
  from: user,
  date: Date.now(),
  forward_from: user,
  forward_from_message_id: user.id,
  text: 'Message text...',
  edit_date: null
}
export const chatMember = {
  user: user,
  status: 'creator|admin|member'
}
