function fakeAsyncOperation(delay: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

export { fakeAsyncOperation };
