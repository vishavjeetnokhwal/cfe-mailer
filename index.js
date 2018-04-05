const sgMail = require('@sendgrid/mail');

class Mail {


    constructor(ApiKey,sourceMail) {
        sgMail.setApiKey(ApiKey);
        this.sourceMail=sourceMail;
        
    }


    registration(name,email,link) {

        var mailData = {
            to: email,
            from: this.sourceMail,
            subject: 'Portal Activation link',
            text: 'Hello ' 
               + name 
               + 'thank you for registered at CFEX Portal. Please click on the following link to complete your activation:' +link,
            html:

                '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;">'
                + '<tbody>'
                + '  <tr width="100%" height="57">'
                + '     <td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '         <img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
                + '     </td>'
                + '  </tr>'
                
                + '  <tr width="100%">'
                + '      <td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
                + '         <h1 style="font-size:20px;margin:0;color:#333;"> Hello ' 
                +                       name 
                + '         </h1>'
                + '         <p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
                + '             You are successfully registered. Click the link below to complete your registration.You will be redirected to a secure site from which you can activate account.'
                + '         </p>'
                + '         <p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
                + '         <a href="'+link
                + '" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Activate Account </a>'
                + ' </p>'
                + '</td> </tr>'
                +'<tr width="100%" height="57">'
                + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '     </td>'
                + '  </tr>'
                + '</tbody> </table>'

        };

       sgMail.send(mailData);

    }



    resetLink(name,email,link) {

        var mailData = {
            to: email,
            from: this.sourceMail,
            subject: 'Portal Reset link',
            text:
                'Hello  ' +
                name +
                'You have requested new link for activation. Please click on the following link to complete your activation:'+link,
            html:
                '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
                +'<tr width="100%" height="57">' 
                + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
                + '</td>'
                + '</tr>'
                + '<tr width="100%">'
                + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
                + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + name + '</h1>'
                + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
                + 'We heard you need a password reset. Click the link below and you will be redirected to a secure site from which you can set a new password.'
                + '</p>'
                + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
                + '<a href="'+link+'" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Reset Password </a>'
                + ' </p>'
                + '</td> </tr>'

                +'<tr width="100%" height="57">'
                + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '     </td>'
                + '  </tr>'

                + '</tbody> </table>'
        };

        sgMail.send(mailData);
    }

    //===================================================

    activation(name,email,link) {

        var mailData = {
            to: email,
            from: this.sourceMail,
            subject: 'Portal Account Activated',
            text:
                'Hello  ' +
                name + 'Your account has been successfully activated!',
            html:
            '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
            +'<tr width="100%" height="57">' 
            + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
            + '</td>'
            + '</tr>'
            + '<tr width="100%">'
            + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
            + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + name + '</h1>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
            + 'Your account has been successfully activated. Click below to login'
            + '</p>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
            + '<a href="'+link+'" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Login </a>'
            + ' </p>'
            + '</td> </tr>'
            +'<tr width="100%" height="57">'
            + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '     </td>'
            + '  </tr>'
            + '</tbody> </table>'
        };

        sgMail.send(mailData);

    }

    //==========================================================
    forgetPassword(name,email,link) {


        var mailData = {
            to: email,
            from: this.sourceMail,
            subject: 'Reset Password Request',
            text:
                'Hello ' +
                name +
                'You recently request a password reset link. Please click on the link below to reset your password:' 
                +link,
            html:
            '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
            +'<tr width="100%" height="57">' 
            + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
            + '</td>'
            + '</tr>'
            + '<tr width="100%">'
            + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
            + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + name + '</h1>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
            + 'We heard you need a password reset. Click the link below and you will be redirected to a secure site from which you can set a new password.'
            + '</p>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
            + '<a href="'+link+'" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Reset Password </a>'
            + ' </p>'
            + '</td> </tr>'
            +'<tr width="100%" height="57">'
            + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '     </td>'
            + '  </tr>'
            + '</tbody> </table>'
        };

        sgMail.send(mailData);

    }
    //=================================================================================
    resetNotification(name,email,link) {


        var mailData = {
            to: email,
            from: this.sourceMail,
            subject: 'Password Reset',
            text:
                'Hello ' +
                name +
                'This e-mail is to notify you that your password was recently reset at localhost.com',
            html:
            '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
            +'<tr width="100%" height="57">' 
            + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
            + '</td>'
            + '</tr>'
            + '<tr width="100%">'
            + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
            + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + name + '</h1>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
            + 'This e-mail is to notify you that your password was recently reset at '+link
            + '</p>'
            + '</td> </tr>'
            +'<tr width="100%" height="57">'
            + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '     </td>'
            + '  </tr>'
            + '</tbody> </table>'
        };

        sgMail.send(mailData);

    }

    ///======================================
    // CUSTOM HTML TEMPLATE MAIL
    //=======================================

  custom(toMail,fromMail,subject,htmlTemplate,text)
  {


    var mailData = {
        to: toMail,
        from: fromMail,
        subject: subject,
        text:text,
        html:htmlTemplate
    };

    sgMail.send(mailData);
  }





}


module.exports = Mail;