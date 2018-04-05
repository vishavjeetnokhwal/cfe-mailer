const nodemailer = require('nodemailer');

class Mail {


    constructor(direct, host, port, username, password, secure) {
        this.transporter = nodemailer.createTransport({
            direct: direct,
            host: host,
            port: port,
            auth: {
                user: username,
                pass: password
            },
            secure: secure
        });

        this.username = username;
    }


    registration(recipient) {

        var mailData = {
            from: this.username,
            to: recipient.email,
            subject: 'Portal Activation link',
            text: 'Hello ' 
               + recipient.name 
               + 'thank you for registered at CFEX Portal. Please click on the following link to complete your activation:' +recipient.link,
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
                +                       recipient.name 
                + '         </h1>'
                + '         <p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
                + '             You are successfully registered. Click the link below to complete your registration.You will be redirected to a secure site from which you can activate account.'
                + '         </p>'
                + '         <p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
                + '         <a href="'+recipient.link
                + '" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Activate Account </a>'
                + ' </p>'
                + '</td> </tr>'
                +'<tr width="100%" height="57">'
                + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '     </td>'
                + '  </tr>'
                + '</tbody> </table>'

        };

        this.transporter.sendMail(mailData, function (err, info) {
            if (err) {

                console.log(err);
                return false;
            }
            return true;
        });

    }



    resetLink(recipient) {

        var mailData = {
            from: this.username,
            to: recipient.email,
            subject: 'Portal Reset link',
            text:
                'Hello  ' +
                recipient.name +
                'You have requested new link for activation. Please click on the following link to complete your activation:'+recipient.link,
            html:
                '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
                +'<tr width="100%" height="57">' 
                + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
                + '</td>'
                + '</tr>'
                + '<tr width="100%">'
                + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
                + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + recipient.name + '</h1>'
                + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
                + 'We heard you need a password reset. Click the link below and you will be redirected to a secure site from which you can set a new password.'
                + '</p>'
                + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
                + '<a href="'+recipient.link+'" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Reset Password </a>'
                + ' </p>'
                + '</td> </tr>'

                +'<tr width="100%" height="57">'
                + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
                + '     </td>'
                + '  </tr>'

                + '</tbody> </table>'
        };

        this.transporter.sendMail(mailData, function (err, info) {
            if (err) {

                console.log(err);
                return false;
            }
            return true;
        });

    }

    //===================================================

    activation(recipient) {

        var mailData = {
            from: this.username,
            to: recipient.email,
            subject: 'Portal Account Activated',
            text:
                'Hello  ' +
                recipient.name + 'Your account has been successfully activated!',
            html:
            '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
            +'<tr width="100%" height="57">' 
            + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
            + '</td>'
            + '</tr>'
            + '<tr width="100%">'
            + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
            + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + recipient.name + '</h1>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
            + 'Your account has been successfully activated. Click below to login'
            + '</p>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
            + '<a href="'+recipient.link+'" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Login </a>'
            + ' </p>'
            + '</td> </tr>'
            +'<tr width="100%" height="57">'
            + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '     </td>'
            + '  </tr>'
            + '</tbody> </table>'
        };

        this.transporter.sendMail(mailData, function (err, info) {
            if (err) {

                console.log(err);
                return false;
            }
            return true;
        });

    }

    //==========================================================
    forgetPassword(recipient) {


        var mailData = {
            from: this.username,
            to: recipient.email,
            subject: 'Reset Password Request',
            text:
                'Hello ' +
                recipient.name +
                'You recently request a password reset link. Please click on the link below to reset your password:' 
                +recipient.link,
            html:
            '<table style="border:none;padding:0 18px;margin:50px auto;width:500px;"><tbody>'
            +'<tr width="100%" height="57">' 
            + '<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '<img height="37" width="122" title="CFE India" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top;" src="">'
            + '</td>'
            + '</tr>'
            + '<tr width="100%">'
            + '<td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px;">'
            + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + recipient.name + '</h1>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
            + 'We heard you need a password reset. Click the link below and you will be redirected to a secure site from which you can set a new password.'
            + '</p>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;margin-bottom:0;text-align:center;color:#333;">'
            + '<a href="'+recipient.link+'" style="border-radius:3px;background:#3AA54C;color:#fff;cursor:pointer;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:180px;text-align:center;"  class="daria-goto-anchor" target="_blank" rel="noopener noreferrer"> Reset Password </a>'
            + ' </p>'
            + '</td> </tr>'
            +'<tr width="100%" height="57">'
            + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '     </td>'
            + '  </tr>'
            + '</tbody> </table>'
        };

        this.transporter.sendMail(mailData, function (err, info) {
            if (err) {

                console.log(err);
                return false;
            }
            return true;
        });

    }
    //=================================================================================
    resetNotification(recipient) {


        var mailData = {
            from: this.username,
            to: recipient.email,
            subject: 'Password Reset',
            text:
                'Hello ' +
                recipient.name +
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
            + '<h1 style="font-size:20px;margin:0;color:#333;"> Hello ' + recipient.name + '</h1>'
            + '<p style="font:15px/1.25em &quot;Helvetica Neue&quot;,Arial,Helvetica;color:#333;">'
            + 'This e-mail is to notify you that your password was recently reset at '+recipient.link
            + '</p>'
            + '</td> </tr>'
            +'<tr width="100%" height="57">'
            + '     <td valign="bottom" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#0079BF;padding:12px 18px;text-align:center;">'
            + '     </td>'
            + '  </tr>'
            + '</tbody> </table>'
        };

        this.transporter.sendMail(mailData, function (err, info) {
            if (err) {

                console.log(err);
                return false;
            }
            return true;
        });

    }






}


module.exports = Mail;