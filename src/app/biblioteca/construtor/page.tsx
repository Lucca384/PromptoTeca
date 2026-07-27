'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wand2, Copy, Check, RotateCcw, Download, Sparkles, 
  ChevronRight, ChevronLeft, FileText, Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCopy } from '@/hooks/use-copy';
import { useToast } from '@/hooks/use-toast';

const AI_MODELS = [
  { id: 'chatgpt', name: 'ChatGPT', icon: '🤖' },
  { id: 'claude', name: 'Claude', icon: '🧠' },
  { id: 'gemini', name: 'Gemini', icon: '✨' },
];

const TONES = [
  { id: 'professional', name: 'Profissional', desc: 'Formal e objetivo' },
  { id: 'friendly', name: 'Amigável', desc: 'Casual e acessível' },
  { id: 'creative', name: 'Criativo', desc: 'Inovador e original' },
  { id: 'academic', name: 'Acadêmico', desc: 'Técnico e preciso' },
  { id: 'persuasive', name: 'Persuasivo', desc: 'Convincente e engajador' },
];

const AREAS = [
  'Marketing', 'Vendas', 'Copywriting', 'Redes Sociais', 'SEO',
  'Programação', 'Educação', 'Negócios', 'Atendimento', 'Produtividade',
  'E-commerce', 'Design', 'Finanças', 'RH', 'Outro'
];

const OUTPUT_FORMATS = [
  { id: 'text', name: 'Texto livre' },
  { id: 'list', name: 'Lista com tópicos' },
  { id: 'step-by-step', name: 'Passo a passo' },
  { id: 'table', name: 'Tabela' },
  { id: 'json', name: 'JSON estruturado' },
  { id: 'markdown', name: 'Markdown formatado' },
];

interface FormData {
  objective: string;
  aiModel: string;
  language: string;
  area: string;
  context: string;
  targetAudience: string;
  tone: string;
  desiredResult: string;
  restrictions: string;
  avoid: string;
  outputFormat: string;
  creativity: number;
  maxLength: string;
  extraInstructions: string;
}

const initialFormData: FormData = {
  objective: '',
  aiModel: 'chatgpt',
  language: 'Português do Brasil',
  area: '',
  context: '',
  targetAudience: '',
  tone: 'professional',
  desiredResult: '',
  restrictions: '',
  avoid: '',
  outputFormat: 'text',
  creativity: 50,
  maxLength: 'médio',
  extraInstructions: '',
};

export default function PromptBuilderPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { copy, isCopied } = useCopy();
  const { success } = useToast();
  
  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePrompt = () => {
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      const toneDescriptions: Record<string, string> = {
        professional: 'profissional, objetivo e direto',
        friendly: 'amigável, acessível e conversacional',
        creative: 'criativo, inovador e original',
        academic: 'acadêmico, técnico e preciso',
        persuasive: 'persuasivo, convincente e engajador',
      };

      const creativityDescriptions: Record<string, string> = {
        low: 'mantenha-se conservador e factual',
        medium: 'equilibre precisão com criatividade',
        high: 'seja criativo e explore diferentes abordagens',
      };

      const creativityLevel = formData.creativity < 33 ? 'low' : formData.creativity < 66 ? 'medium' : 'high';

      let prompt = `# PROMPT PROFISSIONAL

## 🎯 ROLE (Quem você é)
Você é um especialista em ${formData.area || 'sua área de atuação'}${formData.context ? ` com conhecimento em ${formData.context}` : ''}.
Sua comunicação é ${toneDescriptions[formData.tone]}.
${formData.language ? `Você se comunica exclusivamente em ${formData.language}.` : ''}

## 📋 CONTEXTO
${formData.context || '[Contexto específico da tarefa]'}
${formData.targetAudience ? `\nPúblico-alvo: ${formData.targetAudience}` : ''}

## 🎯 OBJETIVO
${formData.objective || '[Defina seu objetivo principal]'}

## ✅ RESULTADO ESPERADO
${formData.desiredResult || '[Descreva o resultado que espera obter]'}

## 📐 FORMATO DE OUTPUT
${formData.outputFormat === 'list' ? 'Apresente a resposta em formato de lista com tópicos organizados.' :
  formData.outputFormat === 'step-by-step' ? 'Estruture a resposta como um passo a passo numerado e claro.' :
  formData.outputFormat === 'table' ? 'Organize as informações em formato de tabela quando apropriado.' :
  formData.outputFormat === 'json' ? 'Retorne a resposta em formato JSON estruturado e válido.' :
  formData.outputFormat === 'markdown' ? 'Use formatação Markdown com headers, listas e ênfases.' :
  'Responda em texto corrido, bem estruturado em parágrafos.'}
${formData.maxLength === 'curto' ? '\nSeja conciso: máximo de 200 palavras.' :
  formData.maxLength === 'longo' ? '\nSeja detalhado e abrangente na resposta.' :
  '\nMantenha um tamanho equilibrado na resposta.'}

## 🎨 CRIATIVIDADE
${creativityDescriptions[creativityLevel]}

## ⚠️ RESTRIÇÕES E REGRAS
${formData.restrictions ? `- ${formData.restrictions.split('\n').join('\n- ')}` : '- Siga as melhores práticas da área'}
${formData.avoid ? `\n\n❌ EVITAR:\n- ${formData.avoid.split('\n').join('\n- ')}` : ''}

${formData.extraInstructions ? `## 💡 INSTRUÇÕES ADICIONAIS\n${formData.extraInstructions}` : ''}

---

**Agora, execute a tarefa descrita acima com excelência.**`;

      setGeneratedPrompt(prompt);
      setIsGenerating(false);
      setStep(4);
    }, 1500);
  };

  const handleCopy = async () => {
    await copy(generatedPrompt, 'generated');
    success('Prompt copiado com sucesso!');
  };

  const handleDownload = (format: 'txt' | 'md') => {
    const content = generatedPrompt;
    const filename = `prompt-${Date.now()}.${format}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    success(`Prompt baixado como ${filename}`);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setGeneratedPrompt('');
    setStep(1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.objective.length > 10;
      case 2:
        return formData.area !== '';
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 mb-4">
          <Wand2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Construtor de Prompts
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Crie prompts profissionais sem precisar saber engenharia de prompts. 
          Preencha o formulário e gere prompts otimizados automaticamente.
        </p>
      </div>

      {/* Progress Bar */}
      {step < 4 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Passo {step} de {totalSteps}</span>
            <span className="text-sm text-violet-400">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        {/* Step 1: Objetivo */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-violet-600/20">
                <Lightbulb className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Objetivo Principal</h2>
                <p className="text-sm text-slate-400">O que você quer que a IA faça?</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Descreva seu objetivo em detalhes *
              </label>
              <textarea
                value={formData.objective}
                onChange={(e) => updateField('objective', e.target.value)}
                placeholder="Ex: Criar uma sequência de emails de vendas para um produto digital de marketing..."
                className="w-full h-32 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-slate-500 mt-1">Mínimo de 10 caracteres</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                IA de destino
              </label>
              <div className="grid grid-cols-3 gap-3">
                {AI_MODELS.map(model => (
                  <button
                    key={model.id}
                    onClick={() => updateField('aiModel', model.id)}
                    className={cn(
                      'flex items-center justify-center gap-2 p-3 rounded-lg border transition-all',
                      formData.aiModel === model.id
                        ? 'border-violet-500 bg-violet-500/10 text-white'
                        : 'border-slate-700 text-slate-400 hover:border-slate-600'
                    )}
                  >
                    <span>{model.icon}</span>
                    <span className="text-sm">{model.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Idioma da resposta
              </label>
              <input
                type="text"
                value={formData.language}
                onChange={(e) => updateField('language', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Step 2: Contexto */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-600/20">
                <FileText className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Contexto e Público</h2>
                <p className="text-sm text-slate-400">Defina o contexto da tarefa</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Área de atuação *
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {AREAS.map(area => (
                  <button
                    key={area}
                    onClick={() => updateField('area', area)}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm transition-all',
                      formData.area === area
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    )}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Contexto adicional
              </label>
              <textarea
                value={formData.context}
                onChange={(e) => updateField('context', e.target.value)}
                placeholder="Ex: Sou dono de uma agência de marketing digital focada em pequenas empresas..."
                className="w-full h-24 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Público-alvo
              </label>
              <input
                type="text"
                value={formData.targetAudience}
                onChange={(e) => updateField('targetAudience', e.target.value)}
                placeholder="Ex: Empreendedores de 25-45 anos que querem escalar seus negócios"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Resultado desejado
              </label>
              <textarea
                value={formData.desiredResult}
                onChange={(e) => updateField('desiredResult', e.target.value)}
                placeholder="Ex: Uma sequência de 5 emails que convertam leads frios em clientes"
                className="w-full h-20 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 3: Estilo */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-amber-600/20">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Estilo e Formato</h2>
                <p className="text-sm text-slate-400">Como a resposta deve ser</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Tom de voz
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TONES.map(tone => (
                  <button
                    key={tone.id}
                    onClick={() => updateField('tone', tone.id)}
                    className={cn(
                      'flex flex-col items-start p-3 rounded-lg border transition-all text-left',
                      formData.tone === tone.id
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-slate-700 hover:border-slate-600'
                    )}
                  >
                    <span className={cn(
                      'font-medium',
                      formData.tone === tone.id ? 'text-white' : 'text-slate-300'
                    )}>
                      {tone.name}
                    </span>
                    <span className="text-xs text-slate-500">{tone.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Formato de saída
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {OUTPUT_FORMATS.map(format => (
                  <button
                    key={format.id}
                    onClick={() => updateField('outputFormat', format.id)}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm transition-all',
                      formData.outputFormat === format.id
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    )}
                  >
                    {format.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Nível de criatividade: {formData.creativity}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.creativity}
                onChange={(e) => updateField('creativity', parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Conservador</span>
                <span>Equilibrado</span>
                <span>Criativo</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Tamanho da resposta
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['curto', 'médio', 'longo'].map(size => (
                  <button
                    key={size}
                    onClick={() => updateField('maxLength', size)}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm capitalize transition-all',
                      formData.maxLength === size
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                O que evitar (opcional)
              </label>
              <textarea
                value={formData.avoid}
                onChange={(e) => updateField('avoid', e.target.value)}
                placeholder="Ex: Não usar jargões técnicos, evitar textos muito longos..."
                className="w-full h-20 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-600/20">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Prompt Gerado</h2>
                  <p className="text-sm text-slate-400">Pronto para usar</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload('txt')}
                >
                  <Download className="w-4 h-4 mr-1" />
                  .txt
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload('md')}
                >
                  <Download className="w-4 h-4 mr-1" />
                  .md
                </Button>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-6 max-h-96 overflow-y-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
                {generatedPrompt}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleCopy}
                className={cn(
                  'flex-1',
                  isCopied('generated') && 'bg-emerald-500 hover:bg-emerald-400'
                )}
              >
                {isCopied('generated') ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copiar Prompt
                  </>
                )}
              </Button>
              <Button variant="secondary" onClick={handleReset}>
                <RotateCcw className="w-5 h-5 mr-2" />
                Criar Novo
              </Button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {step < 4 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-800">
            <Button
              variant="ghost"
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
              className={step === 1 ? 'invisible' : ''}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Voltar
            </Button>

            {step < 3 ? (
              <Button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
              >
                Próximo
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={generatePrompt}
                disabled={!canProceed()}
                isLoading={isGenerating}
              >
                <Wand2 className="w-5 h-5 mr-2" />
                Gerar Prompt
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Tips */}
      {step < 4 && (
        <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h3 className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Dica
          </h3>
          <p className="text-sm text-slate-400">
            {step === 1 && "Quanto mais detalhado for seu objetivo, melhor será o prompt gerado. Inclua o contexto, o resultado esperado e qualquer especificidade importante."}
            {step === 2 && "Definir bem seu público-alvo e contexto ajuda a IA a personalizar a resposta para suas necessidades específicas."}
            {step === 3 && "O tom de voz e formato influenciam diretamente como a resposta será estruturada. Escolha baseado em onde vai usar o resultado."}
          </p>
        </div>
      )}
    </div>
  );
}
