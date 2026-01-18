import { NavItem, ProgramData, CorePhase } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Metodika', 
    path: '/metodika',
    subItems: [
      { label: 'Věda & Neurobiologie', path: '/metodika' },
      { label: 'Rámec C.O.R.E.', path: '/metodika/core' },
    ]
  },
  { label: 'Programy', path: '/programy' },
  { label: 'Pro organizace', path: '/pro-organizace' },
  { label: 'Kontakt', path: '/kontakt' },
];

export const PROGRAMS: ProgramData[] = [
  {
    id: 'resilium-start',
    title: 'Resilium Start',
    path: '/programy/resilium-start',
    description: 'Individuální regulace a orientace v tlaku.',
    details: 'Základní modul zaměřený na ovládnutí vlastních fyziologických reakcí na zátěž. Účastníci se učí identifikovat nástup stresové reakce a aplikovat okamžité protokoly pro obnovení kognitivní kapacity.',
    objectives: [
      'Identifikace individuálních projevů stresu',
      'Nácvik technik pro okamžitou regulaci kognitivních funkcí',
      'Základní orientace v rámci C.O.R.E.',
      'Udržení přesnosti v administrativně náročných situacích'
    ],
    iconName: 'Activity',
    color: 'bg-blue-500'
  },
  {
    id: 'resilium-advanced',
    title: 'Resilium Advanced',
    path: '/programy/resilium-advanced',
    description: 'Týmová stabilita a aplikace v praxi.',
    details: 'Pokročilý trénink zaměřený na udržení profesionálního standardu v reálném pracovním prostředí. Simulace reálných konfliktů a tlakových scénářů specifických pro klienta.',
    objectives: [
      'Aplikace protokolů v simulovaných scénářích',
      'Budování týmové koheze pod vlivem externího tlaku',
      'Sjednocení komunikačních toků',
      'Eliminace chybovosti při předávání informací'
    ],
    iconName: 'Users',
    color: 'bg-indigo-500'
  },
  {
    id: 'resilium-pro',
    title: 'Resilium Pro',
    path: '/programy/resilium-pro',
    description: 'Leadership a rozhodování v krizi.',
    details: 'Modul pro lídry a manažery nesoucí odpovědnost za lidi a procesy v kritických momentech. Zaměřeno na strategické myšlení, když emoce velí k útěku nebo agresi.',
    objectives: [
      'Vedení týmu v podmínkách vysoké neurčitosti',
      'Strategické rozhodování s využitím rámce C.O.R.E.',
      'Profesionální komunikace a deeskalace konfliktů',
      'Ochrana podřízených před dopady krize'
    ],
    iconName: 'Shield',
    color: 'bg-purple-500'
  },
  {
    id: 'resilium-omega',
    title: 'Resilium Omega',
    path: '/programy/resilium-omega',
    description: 'Protokoly pro extrémní bezpečnostní hrozby.',
    details: 'Specializovaná příprava na situace typu Active Threat (aktivní útočník) a další fatální incidenty ohrožující život a zdraví.',
    objectives: [
      'Osvojení instinktivních operačních protokolů pro ochranu života',
      'Koordinace postupu při výskytu extrémní hrozby',
      'Implementace krizového plánu',
      'Psychologická první pomoc po incidentu'
    ],
    iconName: 'Zap',
    color: 'bg-orange-500'
  }
];

export const CORE_PHASES: CorePhase[] = [
  {
    id: 'check',
    title: 'Check',
    description: 'Stabilizace vlastní kognitivní kapacity a ověření stavu okolí. Než začnete řešit problém, musíte ověřit, že máte "signál".',
    iconName: 'CheckCircle'
  },
  {
    id: 'observe',
    title: 'Observe',
    description: 'Objektivní vyhodnocení situace bez emočního zkreslení. Sběr faktických dat o hrozbě, zdrojích a prostředí.',
    iconName: 'Eye'
  },
  {
    id: 'resolve',
    title: 'Resolve',
    description: 'Volba postupu na základě natrénovaných algoritmů. Rychlá selekce nejlepšího možného řešení z dostupných variant.',
    iconName: 'BrainCircuit'
  },
  {
    id: 'execute',
    title: 'Execute',
    description: 'Přesné provedení řešení a kontrola výsledku. Akce musí být rozhodná, kontrolovaná a následovaná okamžitým vyhodnocením dopadu.',
    iconName: 'Crosshair'
  }
];