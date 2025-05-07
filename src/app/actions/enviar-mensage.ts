// pages/api/enviar-mensagem.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { nome, email, telefone, opcao, mensagem } = req.body;

  const { data, error } = await supabase.from('mensagens').insert([
    { nome, email, telefone, opcao, mensagem }
  ]);

  if (error) {
    return res.status(500).json({ erro: 'Erro ao salvar no banco', detalhes: error.message });
  }

  res.status(200).json({ sucesso: true, data });
}
