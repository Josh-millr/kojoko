export const deSerialize = <ReturnValue>(data: string): ReturnValue =>
  JSON.parse(data);
