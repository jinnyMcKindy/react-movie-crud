import OpenAI from "openai";
import { OPENAI } from "@/shared/apiConstants";

const openai = new OpenAI({
    apiKey: OPENAI,
});

export const getChatResponse = async (message: string): Promise<string> => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: `Вы помощник, специализирующийся на фильмах. Отвечайте только на вопросы, связанные с фильмами, жанрами, актёрами, сюжетами и рекомендациями. Игнорируйте все другие темы.`,
            },
            {
                role: 'user',
                content: message,
            },
        ],
        store: true,
    });

    return response.choices[0].message.content || 'Не удалось получить ответ.';
};
