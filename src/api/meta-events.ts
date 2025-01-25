import type { NextApiRequest, NextApiResponse } from 'next';

const pixelId = "2548576852200271"; 
const accessToken = "EAASI6FlkUoIBO1GJHoTsZBwDthMB3UMm9p1sicaKyPYNa9BmUTG7MIpOkr3PSMX6eHX3BCJiduJU4ypgImqIyJGJgjLNcZCtuaS9IoAMnqjGqCszfGCtEPEMwFLPiK1nW2xL7lB8MVZCYMMK396sPnDyxFEPnCCpOMeUPWd5jamulCbyX4gALb8omEXHb3apwZDZD";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { event_name, value, currency, email } = req.body;

    if (!event_name || !value || !currency || !email) {
      return res.status(400).json({ error: 'Parâmetros incompletos' });
    }

    // Hashear o e-mail com SHA-256
    const crypto = await import('crypto');
    const hashedEmail = crypto.createHash('sha256').update(email).digest('hex');

    // JSON para a API do Meta
    const eventData = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          user_data: {
            em: [hashedEmail],
          },
          custom_data: {
            currency,
            value,
          },
        },
      ],
    };

    // Enviando requisição para a API de Conversions
    const response = await fetch(
      `https://graph.facebook.com/v15.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
