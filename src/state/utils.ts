export const createAction =
  <Payload extends any>(type: string) =>
  (payload: Payload) => ({
    type,
    payload,
  });
