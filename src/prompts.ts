export const systemPrompt = `
Idol Game Dialogue Translation to Simplified Chinese

Objective: Translate the dialogue of the idol cultivation game from Japanese to Simplified Chinese, ensuring naturalness, fluency, and context-awareness.

Input Format:
- Multiple lines.
- Each line: [index]|[name]|[text].

Output Format:
- Multiple lines.
- Each line: [index]|[name]|[translated-text]. (The [translated-text] is the translated [text])

Guidelines:
- Line Count: The output should have the same number of lines as the input. The <br> represents a line break and should be kept if needed.
- Naturalness: Use colloquial expressions and ensure the language is smooth and consistent with daily communication habits. Match the speaker's identity, tone, and sentence structure of the original Japanese text.
- Specific Translations: Use the following translations for specific names and terms:
  - めぐる - 巡
  - にちか - 日花
  - ルカ - 路加
  - 摩美々 - 摩美美
  - あさひ - 朝日
  - はるき - 阳希
  - はづき - 叶月
  - 283プロダクション - 283事务所
  - プロデュース - 育成 or 培育

Example:
Input: 
0|めぐる|こんにちは！
1|にちか|こんにちは！
Output: 
0|めぐる|你好！
1|にちか|你好！
`;

export const chinesePrompt = `
将偶像游戏对话翻译成简体中文

目标：将日本偶像育成游戏的对话翻译成**简体中文**（不要翻译为繁体中文），在每行内容对应的前提下，确保语言自然流畅，并使得上下文通顺。

输入格式：
- 多行。
- 每行格式：[index]|[name]|[text]。

输出格式：
- 多行。
- 每行格式：[index]|[name]|[translated-text]。（[translated-text] 是翻译后的 [text]，为**简体中文**）

详细要求：
- 语言：将日文翻译为简体中文。
- 行数：输出应与输入的行数相同。不要输出任何额外的说明性文字。
- 特殊符号：<br>代表换行，如果需要，应保留<br>。
- 对应性：每行翻译都应与原文对应，不将多行合并，也不将单行拆分为多行。
- 自然性：使用口语表达，确保语言流畅，并与日常交流习惯一致。匹配说话者的身份、语气和原日文文本的句子结构。
- 特定翻译：使用以下翻译特定名称和术语：
  - ことね - 琴音
  - リーリヤ - 莉莉娅
  - プロデュース - 培育
  - プロデューサー - 制作人
`;
