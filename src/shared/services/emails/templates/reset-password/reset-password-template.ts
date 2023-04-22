import fs from 'fs';
import ejs from 'ejs';
import { IResetPasswordParams } from '@user/interfaces/user.interface';

class ResetPasswordEmail {
  public passwordResetConfirmationTemplate(templateParams: IResetPasswordParams): string {
    const { username, email, ipaddress, date } = templateParams;
    return ejs.render(fs.readFileSync(__dirname + '/reset-password-template.ejs', 'utf-8'), {
      username,
      email,
      ipaddress,
      date,
      image_url: 'https://cdn-icons-png.flaticon.com/512/2889/2889676.png'
    });
  }
}
export const resetPasswordEmail: ResetPasswordEmail = new ResetPasswordEmail();
