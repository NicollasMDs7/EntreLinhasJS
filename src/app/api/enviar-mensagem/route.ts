// src/app/api/enviar-mensagem/route.ts
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, telefone, opcao, mensagem } = body;

    const { data, error } = await supabase.from('mensagens').insert([
      { nome, email, telefone, opcao, mensagem },
    ]);

    if (error) {
      return NextResponse.json(
        { erro: 'Erro ao salvar no banco', detalhes: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ sucesso: true, data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ erro: 'Erro interno' }, { status: 500 });
  }
}
