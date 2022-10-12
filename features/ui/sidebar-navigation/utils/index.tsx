export const sendEmail = (): void => {
  const win: Window = window;
  win.location = "mailto:support@prolog-app.com?subject=Support Request";
};
