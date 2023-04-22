import fs from 'fs';
import ejs from 'ejs';

class ForgotPasswordEmail {
  public passwordResetTemplate(username: string, resetLink: string): string {
    return ejs.render(fs.readFileSync(__dirname + '/forgot-password-template.ejs', 'utf-8'), {
      username,
      resetLink,
      image_url: 'https://cdn-icons-png.flaticon.com/512/2889/2889676.png'
    });
  }
}
export const forgotPasswordEmail: ForgotPasswordEmail = new ForgotPasswordEmail();
