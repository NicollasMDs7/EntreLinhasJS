// src/app/api/enviar-mensagem/route.ts
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { sendEmail } from '../emailService';



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, telefone, opcao, mensagem } = body;

    // 1. Salvar no banco de dados
    const { data, error } = await supabase.from('mensagens').insert([
      { nome, email, telefone, opcao, mensagem },
    ]);

    if (error) {
      console.error('Erro ao salvar no banco:', error);
      return NextResponse.json(
        { erro: 'Erro ao salvar no banco', detalhes: error.message },
        { status: 500 }
      );
    }

    // 2. Enviar email de notificação
    console.log('Enviando email de notificação...');
    const emailResult = await sendEmail({ nome, email, telefone, opcao, mensagem });
    
    if (!emailResult.success) {
      console.error('Erro ao enviar email:', emailResult.error);
      // Continuamos mesmo se o email falhar, mas registramos o erro
    } else {
      console.log('Email enviado com sucesso!');
    }

    return NextResponse.json({ 
      sucesso: true, 
      data,
      notificacaoEmail: emailResult.success 
    }, { status: 200 });
  } catch (e: unknown) {
    console.error('Erro interno:', e);
    return NextResponse.json({ erro: 'Erro interno', detalhes: (e as Error).message }, { status: 500 });
  }
}