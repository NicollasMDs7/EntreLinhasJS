import nodemailer from 'nodemailer';

// Configurar o transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface MensagemData {
  nome: string;
  email: string;
  telefone: string;
  opcao: string;
  mensagem: string;
}

export async function sendEmail(mensagemData: MensagemData) {
  const { nome, email, telefone, opcao, mensagem } = mensagemData;
  
  const mailOptions = {
    from: `"EntreLinhasJS" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `Nova mensagem de ${nome} - ${opcao}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h1 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nova mensagem do site EntreLinhasJS</h1>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Telefone:</strong> ${telefone}</p>
          <p style="margin: 10px 0;"><strong>Opção selecionada:</strong> ${opcao}</p>
          
          <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 4px;">
            <p style="margin: 0 0 10px 0;"><strong>Mensagem:</strong></p>
            <p style="margin: 0; white-space: pre-line;">${mensagem}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px;">
          <p>Esta é uma notificação automática do site EntreLinhasJS.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
}
