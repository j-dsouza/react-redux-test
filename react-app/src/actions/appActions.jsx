export function handleReset() {
  console.log("Reset dispatched");
  return {
    type: "RESET_APP",
    payload: "Success"
  };
}
