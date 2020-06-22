export default function decks(state = {
  'React': { name: 'React', questions: [{ question: 'q1', answer: 'a1' }, { question: 'q2', answer: 'a2' }] },
  'Javascript': { name: 'Javascript', questions: [{ question: 'q3', answer: 'a3' }] },
}, action) {
  switch (action.type) {
    default:
      return state
  }
}
