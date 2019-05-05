export function handleIncrement(counterId) {
  return {
    type: "INCREMENT",
    payload: counterId
  };
}

export function handleDelete(counterId) {
  return {
    type: "DELETE",
    payload: counterId
  };
}
